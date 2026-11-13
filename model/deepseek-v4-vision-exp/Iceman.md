# DeepSeek V4 Vision Exp — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `deepseek-v4-vision-exp` (DeepSeek V4 Vision Exp) — folder: `model/deepseek-v4-vision-exp`

## Overall
- **Overall Score: 80/100.** Experimental multimodal vision variant positioned for image-to-code/UI reasoning with a free Zen tier, but limited official public documentation and a short 200K context make it a preview/specialist choice rather than a general daily driver.

## Scores
- **Tool use: 78/100.** As part of DeepSeek's V4/V4.1 Flash family it is likely usable in tool-calling chat workflows when hosted appropriately, but I did not find a dedicated primary spec page confirming tool-use behavior for this exact experimental vision variant.
- **Reasoning: 79/100.** Repo metadata highlights strong visual reasoning for UI/screenshot-to-code tasks (e.g. ZeroBench 35.0% claim), suggesting capable multimodal reasoning in that niche; broader reasoning evidence for this exact variant was limited in fetched sources.
- **Context window: 75/100.** Repo metadata states a 200K context window, useful for image+code tasks but materially shorter than current 1M-context peers.
- **Multimodal: 86/100.** Designed for text/image/PDF inputs with text output focused on visual understanding and UI reasoning; this is its main differentiator, though public technical details are sparse.
- **Coding: 82/100.** Positioned for image-to-code and UI implementation workflows, which can be strong for frontend/screenshot-driven tasks, but general coding depth/agentic performance is less documented than mainstream DeepSeek Flash models.
- **Cost efficiency: 88/100.** Repo metadata indicates a free OpenCode Zen tier for experimentation/benchmarking, making it attractive for trials despite experimental status and uncertain long-term availability.
- **Overall Score: 78/100.** Promising free experimental vision-to-code specialist with good multimodal focus, balanced by limited official documentation, shorter context, and preview stability risks.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://www.deepseek.com/
  - https://api-docs.deepseek.com/quick_start/pricing
  - https://opencode.ai/docs/zen/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/deepseek-v4-vision-exp/meta.json
field: officialUrl
proposed: https://api-docs.deepseek.com/quick_start/pricing
source: https://api-docs.deepseek.com/quick_start/pricing (notes legacy deepseek-v4-flash-vision-exp routed/retired context)
```