# 🚀 Como Conectar ao GitHub

## ⚠️ IMPORTANTE: Criar o Repositório Primeiro

O repositório ainda não existe no GitHub. Siga estes passos:

## Passo 1: Criar o Repositório no GitHub

1. **Acesse**: https://github.com/new
2. **Preencha**:
   - **Repository name**: `orlando_barbearia`
   - **Description**: `Site institucional profissional para a Barbearia Orlando`
   - **Visibility**: Escolha **Public** ou **Private**
   - ⚠️ **NÃO marque** nenhuma opção:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   
   *(Já temos esses arquivos no projeto!)*

3. Clique em **"Create repository"**

## Passo 2: Conectar e Fazer Push

Depois de criar o repositório, execute:

```bash
# Verificar remote atual
git remote -v

# Se não estiver configurado ou estiver errado, configure:
git remote set-url origin https://github.com/DinisMiranda/orlando_barbearia.git

# Ou se preferir SSH (depois de configurar chave):
git remote set-url origin git@github.com:DinisMiranda/orlando_barbearia.git

# Fazer push
git push -u origin main
```

## Autenticação

Se pedir credenciais ao fazer push:

### Opção A: Personal Access Token (Recomendado)

1. Vá em: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Dê um nome: `orlando-barber-token`
4. Selecione a permissão: ✅ **repo** (todas as sub-opções)
5. Clique em **"Generate token"**
6. **Copie o token** (você só verá uma vez!)
7. Quando pedir senha, cole o token (não sua senha do GitHub)

### Opção B: GitHub CLI (Mais Fácil)

```bash
# Instalar GitHub CLI (se não tiver)
brew install gh

# Autenticar
gh auth login

# Fazer push (não precisará de token)
git push -u origin main
```

## Verificar

Depois do push, acesse:
**https://github.com/DinisMiranda/orlando_barbearia**

Seu código estará lá! 🎉

## Estrutura no GitHub

O repositório terá esta estrutura:
```
orlando_barbearia/
    ├── index.html
    ├── agendar.html
    ├── styles.css
    ├── script.js
    └── ... (todos os outros arquivos)
```

---

**Dica**: Se quiser que os arquivos fiquem na raiz do repositório (sem a pasta `orlando_barbearia`), avise que eu ajudo a reorganizar!
