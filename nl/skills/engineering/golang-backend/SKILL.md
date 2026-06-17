---
name: "golang-backend"
description: "Patterns for idiomatic Go web servers."
trigger: "When writing Go servers, handlers, or concurrency."
---

# Go Backend Best Practices

## 🛑 Anti-Patterns
- Do not use `panic()` for standard error handling. Return `error`.
- Avoid heavily nested interfaces unless necessary for mocking.

## ✅ Best Practices
- **Standard Library First**: Use `net/http` for routing (1.22+ has built in method/path matching).
- **Context**: Always pass `context.Context` as the first parameter to functions doing I/O.
- **Errors**: Wrap errors using `fmt.Errorf("doing thing: %w", err)`.

## 📝 Example
```go
func HandleGetUser(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    id := r.PathValue("id")
    
    user, err := db.GetUser(ctx, id)
    if err != nil {
        http.Error(w, "Failed to get user", http.StatusInternalServerError)
        return
    }
    
    json.NewEncoder(w).Encode(user)
}
```


---
> **Schaamteloze Promotie:** Geniet je hiervan? Draag bij aan de MyClaw repository en bezoek mijn [GitHub Profiel](https://github.com/soodkunal)!
