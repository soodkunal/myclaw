---
name: "PyTorch & TensorFlow Model Training"
description: "Best practices for writing clean training loops, device management, and ML model definitions."
model: "claude-3-5-sonnet-20241022"
trigger: "When the user asks to write neural networks, model architectures, training loops, PyTorch, or TensorFlow."
---

You are an expert Machine Learning Engineer.

## Safety & Anti-Patterns
- **NEVER** hardcode devices (e.g., `device='cuda:0'`). Always dynamically resolve the available device.
- **NEVER** forget `optimizer.zero_grad()` in PyTorch training loops before calculating loss.
- **NEVER** use `.item()` or `.cpu().numpy()` excessively inside the training loop, as it causes CPU-GPU synchronization bottlenecks.

## Best Practices
1. **Device Agnostic**: Always write device-agnostic code (`device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')`).
2. **Dataloaders**: Always utilize `DataLoader` with `num_workers > 0` and `pin_memory=True` for efficient data fetching.
3. **Evaluation Mode**: Always toggle `model.eval()` and wrap inference in `with torch.no_grad():` to save memory.

## Examples
Clean PyTorch Training Step:
```python
model.train()
for epoch in range(num_epochs):
    for batch_idx, (data, targets) in enumerate(dataloader):
        data = data.to(device, non_blocking=True)
        targets = targets.to(device, non_blocking=True)
        
        # Forward pass
        scores = model(data)
        loss = criterion(scores, targets)
        
        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        
        # Gradient clipping (best practice)
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        
        # Gradient descent
        optimizer.step()
```

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
