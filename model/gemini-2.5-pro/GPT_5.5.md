# Gemini 2.5 Pro — findings by GPT 5.5

- Source: Google/Gemini 2.5 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Gemini 2.5 Pro is an older Pro-class reasoning and multimodal model, tracked in this repo via a text-only OpenCode route.
- **Provider / access:** Google Gemini API / OpenCode route.
- **Release / knowledge:** Gemini 2.5 report was published in 2025.
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** Repo route is 128K total; Google's broader Gemini 2.5 Pro card discusses up to 1M context in native settings.
- **Modalities:** Repo route is text in/out; native Gemini 2.5 Pro supports multimodal input.
- **Pricing (as of 2026-10-05):** Standard pricing in repo metadata; Google Gemini API pricing varies by route/context.
- **Architecture:** Proprietary Google Gemini model.

### Raw benchmarks found

Agent / tool use:

- Google model card: Gemini 2.5 Pro was evaluated across many performance benchmarks, including SWE-Bench with multiple-attempt scaffolding (`https://modelcards.withgoogle.com/assets/documents/gemini-2.5-pro.pdf`).
- Gemini 2.5 technical report: says Gemini 2.5 models improve long-context processing over Gemini 1.5 and include up to 1M-token input sequences in native settings (`https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Google model card includes benchmark comparisons against contemporary frontier models; exact accessible snippets did not expose all GPQA/HLE rows.
- GPQA Diamond: **no verified public score found in accessible text**
- HLE: **no verified public score found**

Coding:

- Model card discusses SWE-Bench evaluation methodology and multiple trajectories/self-judging, but exact SWE number was not visible in accessible snippet.
- SWE-bench Verified / SWE-Pro: **evaluated, exact score not exposed in accessible text**
- LiveCodeBench: **no verified public score found**

Long context:

- Native Gemini 2.5 Pro supports up to 1M input, but this repo's tracked OpenCode route is 128K; no independent MRCR value for the route was found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Pro-class Google model with SWE-Bench evaluation, but the tracked route is older/text-only and lacks agent rows.
- **Reasoning: 84/100.** Strong for its generation, capped below newer Gemini 3/4 and 2026 frontier models.
- **Context window: 72/100.** The tracked route is 128K, despite native 1M support elsewhere.
- **Multimodal: 15/100.** Repo route is text-only, so scored by tracked access rather than native Gemini.
- **Coding: 82/100.** SWE-Bench evaluation and user reports support solid coding, but exact row was not found.
- **Cost efficiency: 70/100.** Older Pro route with standard pricing is less compelling than newer Flash/open alternatives.
- **Overall Score: 66/100.** Mean of the five quality dimensions; best fit is legacy Gemini Pro comparison through the repo's text route.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
