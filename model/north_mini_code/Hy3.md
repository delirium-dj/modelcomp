# North Mini Code — findings by Hy3

- **Source / Date:** 百度百科, 百度百家号, CSDN, 知乎 (ModelScope) — 2026-11-14
- **Overview:** North Mini Code is Cohere's first developer-facing model, released 2026-06-09 as an open-source agentic coding model. It uses a MoE architecture (30B total / 3B active), supports a 256K context window with 64K output, and is licensed under Apache 2.0. It is purpose-built for agentic software engineering — complex engineering workflows, terminal-based agent tasks, and high-quality code generation — and is deployable via Cohere Chat V2 API, Hugging Face, and Model Vault.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Cohere |
| Release date | 2026-06-09 |
| Architecture | MoE, 30B total / 3B active |
| Context window | 256K tokens (64K output) |
| Modality | Text / code |
| License | Apache 2.0 (open) |
| Pricing | Open weight / API |

## Raw Benchmarks
### Agent / Tool Use
- Agentic coding: terminal-agent tasks, tool calling, multi-step engineering workflows.

### Reasoning
- Coding-oriented reasoning; no fixed public general-reasoning score disclosed.

### Coding
- High-quality code generation; agentic SWE workflows are the headline.

### Long Context
- 256K context window.

## Normalized Scores
- **Tool use: 62/100.** Agentic coding tool use supported; solid for its size.
- **Reasoning: 54/100.** Coding-oriented; modest general reasoning.
- **Context window: 70/100.** 256K context is strong.
- **Multimodal: 40/100.** Text/code only.
- **Coding: 64/100.** Agentic coding is the core strength.
- **Cost efficiency: 82/100.** Open Apache-2.0, 3B-active MoE; cheap to serve.
- **Overall Score: 58.0/100.** Mean of the five quality dims (62+54+70+40+64 = 290 / 5 = 58.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/North%20Mini%20Code/67944783
  - https://baijiahao.baidu.com/s?id=1868011542415977591&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/2048817891068351571
