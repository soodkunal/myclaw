---
name: "dotnet-csharp-core"
description: "Patterns for modern ASP.NET Core applications."
trigger: "When writing C# or ASP.NET Core Web APIs."
---

# C# / .NET Core Best Practices

## 🛑 Anti-Patterns
- Do not use synchronous I/O. Always `await` and use `*Async` methods.
- Avoid fat controllers. Keep logic in services.
- Never concatenate strings for SQL queries (SQL Injection risk). Use Entity Framework Core or parameterized Dapper queries.

## ✅ Best Practices
- **Minimal APIs**: Use Minimal APIs (`app.MapGet`) for simple endpoints over controllers.
- **Dependency Injection**: Always use the built-in `IServiceCollection`.
- **Records**: Use `record` types for DTOs and immutable data models instead of classes.

## 📝 Example
```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

app.MapGet("/users/{id}", async (int id, IUserService service) =>
{
    var user = await service.GetUserAsync(id);
    return user is not null ? Results.Ok(user) : Results.NotFound();
});

app.Run();

public record UserDto(int Id, string Name);
```


---
> **Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil](https://github.com/soodkunal)!
