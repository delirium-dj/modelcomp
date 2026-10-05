# Claude Sonnet 4.6 — findings by GPT 5.5

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Sonnet 4.6 is a high-efficiency Claude model for coding, computer use, long-context reasoning, and agent planning.
- **Provider / access:** Anthropic Claude API and Claude products.
- **Release / knowledge:** Public docs were published about seven months before 2026-10-05; platform docs list an August 2025 knowledge cutoff.
- **IDs:** `anthropic/claude-sonnet-4-6`
- **Context window:** Repo metadata tracks 200K; Anthropic platform docs list 1M / 128K for the legacy model row, with route/beta differences.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Anthropic platform docs list $3/M input and $15/M output for Sonnet 4.6.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Anthropic platform docs: Sonnet 4.6 is listed with 1M context, 128K max output, $3/$15 pricing, adaptive thinking, high default effort, and Aug 2025 knowledge cutoff (`https://platform.claude.com/docs/en/models/sonnet-4-6/overview`).
- Anthropic system card: Sonnet 4.6 gained about **7.0 percentage points** on GMMLU with adaptive thinking + max effort versus thinking disabled (`https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf`).
- DeepSearchQA: public coverage reports F1 improved from **52.6%** to **59.4%** with dynamic filtering/search-code workflows.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- System card reports GMMLU multilingual gap of **-4.4%** to English, compared with -5.4% for Sonnet 4.5.
- GMMLU: **+7.0 pp** from adaptive thinking + max effort; exact absolute score not exposed in accessible snippet.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public launch discussion says users preferred Sonnet 4.6 over Sonnet 4.5 **70%** of the time and over Opus 4.5 **59%** of the time in early Claude Code testing.
- Sonnet 5 comparison discussion reports a Sonnet 4.6 benchmark row of **78.5%**, but the exact benchmark label was not visible in the accessible result.
- SWE-bench Verified / SWE-Pro: **no exact verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Platform docs expose 1M context on the model page while repo metadata tracks 200K; no independent MRCR/RULER score for this exact model was found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong Claude Code preference data, search/code filtering improvements, and adaptive thinking support strong tool use, capped by missing standard agent rows.
- **Reasoning: 88/100.** GMMLU and thinking-effort gains support high reasoning, below later Sonnet/Fable/Opus tiers.
- **Context window: 88/100.** 1M documented route exists, but repo metadata and practical plans may expose 200K.
- **Multimodal: 70/100.** Text and image input only.
- **Coding: 88/100.** Strong Sonnet coding value and user preference evidence, capped by absent exact SWE/LCB rows.
- **Cost efficiency: 78/100.** $3/$15 is good for Claude quality but no longer especially cheap versus 2026 competitors.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is legacy Claude coding and agent workflows at Sonnet pricing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
