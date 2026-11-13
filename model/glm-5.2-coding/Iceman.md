# GLM 5.2 Coding — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `glm-5.2-coding` (GLM 5.2 Coding, Z.ai/Zhipu context) — folder: `model/glm-5.2-coding`

## Overall
- **Overall Score: 72.2/100.** Coding-positioned GLM 5.2 entry in repo metadata with strong claimed agentic/tool-orchestration performance and 1M-context positioning, but the exact separate "GLM-5.2-Coding" SKU/public spec is not clearly verified in fetched Z.ai documentation.

## Scores
- **Tool use: 82/100.** Repo metadata cites very strong tool orchestration (e.g. tau2-bench 99.1% claim) and coding-agent suitability; Z.ai platform models (e.g. GLM-5.2/5.3 family) generally support tool use, but I did not find a dedicated verified spec page for this exact coding SKU.
- **Reasoning: 78/100.** GLM 5.2 family is positioned for capable reasoning/coding tasks in provider materials, and repo metadata cites solid benchmark claims, but exact-variant verification is limited.
- **Context window: 82/100.** Repo metadata states 1,000,000 context (not 128K); I could not confirm this specific coding SKU's context window from a dedicated primary doc, though GLM 5.x family context is typically large in provider listings.
- **Multimodal: 35/100.** Repo metadata indicates text in/out only, limiting use for image/video/PDF-native workflows compared with multimodal coding models.
- **Coding: 84/100.** Positioned as a coding-focused variant with strong claimed SWE/terminal/tool-use results in metadata; however, metadata itself notes unverifiable published claims for some figures and no separate SKU clearly documented on major provider pages.
- **Cost efficiency: 78/100.** Repo metadata lists $1.40/$4.40 per 1M in/out on Z.ai API and a free coding-tier route via AIHubMix; Z.ai pricing docs confirm GLM-5.2 pricing at $1.4/$4.4 per 1M, but the specific "coding" SKU/routing details were not independently verified.
- **Overall Score: 74/100.** Potentially strong coding/tooling profile if mapped to GLM-5.2 capabilities, but confidence is reduced by limited verifiable documentation for a distinct GLM-5.2-Coding SKU.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://docs.z.ai/guides/overview/pricing
  - https://open.zhipuai.cn/
  - https://aihubmix.com/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/glm-5.2-coding/meta.json
field: statusNote
proposed: No clearly verified separate public "GLM-5.2-Coding" SKU/spec page found in fetched Z.ai/provider docs as of 2026-11-13; treat as coding-positioned/route-specific entry pending primary confirmation.
source: https://docs.z.ai/guides/overview/pricing, https://docs.z.ai/guides/llm/glm-5.2-coding (404)
```