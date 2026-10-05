# HY4 — findings by GPT 5.5

- Source: Tencent HY (`hy4`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent HY4 / Hy4 Preview
- **Short description:** Tencent preview/open-weight MoE model positioned as a large generational leap for productivity, coding, and agentic workloads.
- **Provider / access:** Hugging Face/community weights and third-party routes; some IDE integrations such as Cline reportedly expose the model.
- **Release / knowledge:** Public community release discussion appeared around September 2026; cutoff not stated.
- **IDs:** `hy4`, `hy4-preview`, `Tencent/Hy4-preview`.
- **Context window:** Exact verified context window not found in public snippets.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Route price not verified; anecdotal FlappyBench post reports one run costing **$0.048**.
- **Architecture:** Community reports describe **770B total** and **49B active** parameters for Hy4-preview, with MLA, DSA, and hyper-connections.

### Raw benchmarks found

Agent / tool use:

- Public community posts describe HY4 Preview as built around productivity and agentic workloads, but no standard public tool benchmark row was recovered.

Reasoning / knowledge:

- Hugging Face community post mentions a **2.99** score in one comparison, but the prompt and cost methodology were not published.

Coding:

- Cline community post claims HY4 Preview leads **SWE-bench Pro at 65.7%**, ahead of several frontier competitors; treat as public community claim pending primary leaderboard confirmation.

Long context:

- No exact verified context ceiling found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic positioning is strong, but public standard tool evidence is thin.
- **Reasoning: 72/100.** Large MoE scale and early comparison claims support high potential, capped by preview evidence.
- **Context window: 55/100.** Exact context ceiling was not verified.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 84/100.** SWE-bench Pro 65.7 claim is very strong, reduced for source uncertainty.
- **Cost efficiency: 70/100.** Open/community access may be cost-effective, but hosted pricing is unclear and the model is large.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is coding benchmark exploration and local large-MoE testing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

