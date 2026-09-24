# Big Pickle — findings by Gemini 3.1 Flash Lite

- Source: OpenCode/Big Pickle
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** A free, stealth reasoning model hosted on OpenCode Zen, widely believed to be based on GLM-4.6. It is used primarily for coding tasks, offering performance comparable to Claude 3.5 Sonnet during its free trial period.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`). Chat Completions API.
- **Release / knowledge:** Released mid-2026; knowledge cutoff unknown.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200K total (160K in / 32K out). Verified via OpenCode Zen model metadata.
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-09-24):** Free Zen tier (promotional). Paid equivalent GLM-4.6 is ~$0.60 per 1M input / $2.20 per 1M output.
- **Architecture:** Likely proprietary (GLM-4.6 variant).

### Raw benchmarks found

> No verified public benchmark numbers found for the "Big Pickle" ID specifically, as it is a promotional/stealth branding of the underlying GLM-4.6 model.

- Agent / tool use: no verified public score found
- Reasoning / knowledge: no verified public score found
- Coding: no verified public score found
- Long context: no verified public score found

### Normalized scores (1–100)

- **Tool use: 60/100.** Provisional based on performance consensus for GLM-4.6 class models in coding tasks.
- **Reasoning: 60/100.** Provisional based on performance consensus for GLM-4.6 class models.
- **Context window: 70/100.** Limited by 200k window, though functional.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 65/100.** Strong performance in coding tasks, comparable to mid-tier Sonnet models.
- **Cost efficiency: 100/100.** Free tier during promotional trial.
- **Overall Score: 54/100.** (Mean of 5 non-cost dims). Strong coding performance, but limited by text-only modality and provisional nature of the branding.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-24
- Method: Public internet research and community consensus on OpenCode Zen metadata. Scores are normalized 1–100 interpretations.
