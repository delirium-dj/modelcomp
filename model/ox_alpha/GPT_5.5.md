# Ox Alpha — findings by GPT 5.5

- Source: OpenRouter/Ox Alpha
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Ox Alpha is a stealth frontier-class model on OpenRouter/OpenCode, notable for free preview access, 1M context, and strong long-horizon coding behavior despite unknown provenance.
- **Provider / access:** OpenRouter `stealth/ox-alpha`; OpenCode Zen free tier route.
- **Release / knowledge:** Public preview and analysis appeared around September 2026.
- **IDs:** `opencode/ox-alpha`, `stealth/ox-alpha`
- **Context window:** 1,048,576 input / 131K output per repo metadata and public analysis.
- **Modalities:** Text, image, video, and PDF input; text output.
- **Pricing (as of 2026-10-05):** Free during preview / OpenCode Zen free tier; OpenRouter terms and fallback/supporting-model behavior can affect real charges.
- **Architecture:** Unknown stealth model.

### Raw benchmarks found

Agent / tool use:

- Ox Alpha pricing analysis: identifies `stealth/ox-alpha` as an OpenRouter preview model and notes direct API use follows OpenRouter terms/pricing (`https://oxalpha.online/pricing`).
- Public analysis describes Ox Alpha as a $0.00 frontier-class model with 1,048,576-token context and multimodal input (`https://www.youtube.com/watch?v=EckxtVkTBHY`).
- Reddit OpenRouter review reports Ox Alpha read full context and performed careful corrections when other models struggled, while noting flakiness and supporting-model/fallback costs (`https://www.reddit.com/r/openrouter/comments/1vvnsld/ox_alpha_review/`).
- DeepSWE proxy: **63%** mentioned in OpenCode/OpenRouter pricing leak discussion, with lower output tokens than some open models.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- No official GPQA/HLE or model-card reasoning table was found because the provider is anonymous.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- User reports emphasize full-context coding, CSV import polish, and issue-finding performance; no official SWE/LCB score found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- DeepSWE: **63% community-mentioned proxy, not an official table**

Long context:

- 1,048,576 context and 131K output are tracked by the repo/public analysis; no independent MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong long-context agent anecdotes and DeepSWE proxy support good tool use, capped by anonymity/flakiness.
- **Reasoning: 82/100.** Frontier-like behavior is reported, but no official reasoning rows exist.
- **Context window: 94/100.** 1M / 131K context-output capacity is excellent.
- **Multimodal: 90/100.** Text/image/video/PDF input coverage is broad.
- **Coding: 83/100.** Good coding-agent reports, with no standardized SWE/LCB evidence.
- **Cost efficiency: 100/100.** Free preview / Zen tier is maximal value, with caveats about fallback/supporting-model charges.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is free/experimental long-context coding when provenance risk is acceptable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
