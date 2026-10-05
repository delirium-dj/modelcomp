# GPT 5.5 Pro — findings by GPT 5.5

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** GPT-5.5 Pro is OpenAI's higher-capability GPT-5.5 tier for ChatGPT Pro/Business/Enterprise and API Responses workflows.
- **Provider / access:** OpenAI ChatGPT and OpenAI API Responses API, including Batch API support.
- **Release / knowledge:** GPT-5.5 launched about five months before 2026-10-05, with GPT-5.5 Pro for Pro/Business/Enterprise users.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** OpenAI developer docs list a 1,050,000 context window for GPT-5.5 Pro; GPT-5.5 in Codex is also described as 400K in ChatGPT/Codex contexts.
- **Modalities:** OpenAI GPT-family Responses API model; exact modality table for Pro was not exposed in accessible snippets.
- **Pricing (as of 2026-10-05):** OpenAI model docs indicate token-based pricing; exact price rows were not visible in the accessible snippet.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI GPT-5.5 launch page: GPT-5.5 rolled out to ChatGPT and Codex, with GPT-5.5 Pro for Pro/Business/Enterprise users (`https://openai.com/index/introducing-gpt-5-5/`).
- OpenAI developer docs: GPT-5.5 Pro is available for Responses API and Batch API and supports advanced multi-turn interactions (`https://developers.openai.com/api/docs/models/gpt-5.5-pro`).
- OSWorld-Verified: **78.7%** for GPT-5.5 from a public GPT-5.5 usage/benchmark PDF, used as family proxy (`https://mavgpt.ai/pdfs/How_to_Get_the_Most_Out_of_GPT_5_5_2026.pdf`).
- CyberGym: **81.8%** family proxy.

Reasoning / knowledge:

- Public GPT-5.5 benchmark PDF: reports GPT-5.5 family long-context and verifier-bound benchmark improvements; exact GPT-5.5 Pro rows were not separated in accessible text.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- MRCR v2: **74.0% at 512K-1M** family proxy.

Coding:

- SWE-Bench Pro: **58.6%** for GPT-5.5 family proxy in public benchmark PDF.
- MineBench community comparison: reports GPT-5.5 Pro and standard GPT-5.5 had unusually similar output quality in that user's testing (`https://www.reddit.com/r/singularity/comments/1sxapqb/differences_between_gpt_54_and_gpt_55_on_minebench/`).
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- OpenAI developer docs list 1,050,000 context; public PDF reports MRCR v2 **74.0%** at 512K-1M for GPT-5.5 family.

### Normalized scores (1–100)

- **Tool use: 89/100.** Responses API, OSWorld 78.7%, and CyberGym 81.8% family proxies indicate strong agent/tool ability.
- **Reasoning: 89/100.** GPT-5.5 Pro is a high-tier OpenAI model, capped because Pro-specific GPQA/HLE rows were not found.
- **Context window: 94/100.** 1,050,000-token API context and MRCR family evidence are strong.
- **Multimodal: 80/100.** GPT-family multimodal support is likely, but exact Pro modality table was not verified.
- **Coding: 87/100.** SWE-Bench Pro 58.6% family proxy supports strong coding, though not top 2026 frontier.
- **Cost efficiency: 70/100.** Pro-tier access and token pricing make it less efficient than later GPT-5.6/GPT-6 or low-cost open models.
- **Overall Score: 88/100.** Mean of the five quality dimensions; best fit is OpenAI-native long-context and Responses API workflows needing GPT-5.5 Pro stability.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
