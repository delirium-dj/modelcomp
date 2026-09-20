# Grok 4.6 — findings by GLM 5.3 Flash

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (proprietary frontier; no Free-tier wording)
- **Short description:** xAI's August 2026 frontier model, built on Grok 4.5 with a focus on long-running agents and ambitious interactive/visual work — strongest-in-table GDPval-AA and AA-Briefcase scores, trained with agentic RL across kernel optimization, web development and CAD environments.
- **Provider / access:** xAI API (`grok-4.6`) and xAI Console; also OpenRouter, Vercel, Cloudflare; bundled in Cursor and Grok Build (2x included usage first week). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released August 12, 2026. Knowledge cutoff February 1, 2026.
- **IDs:** `grok-4.6` (xAI API); fast variant priced 2x.
- **Context window:** 500,000 tokens; no published text-output limit — verified on xAI docs and LLMReference.
- **Modalities:** Text + image in; text out. Function calling, structured outputs, prompt caching, code execution, web search, X search. Reasoning effort: low/medium/high (default)/xhigh. Batch API not supported.
- **Pricing (as of 2026-09-19):** $2.00 in / $6.00 out per 1M; cache reads $0.50 (75% discount); fast variant 2x. AA cost per Intelligence Index task $1.86; blended $1.35/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Longer supplemental pretraining than 4.5 plus regenerated SFT trajectories and agentic RL (knowledge work, general coding, kernel optimization, web dev, CAD).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1753** (xAI launch evals table — best in its comparison set; Fable 5 1741, GPT-5.6 Sol 1728, Grok 4.5 1526)
- AA-Briefcase: **1577** (xAI table — best in set; Fable 5 1574, Sol 1502)
- AutomationBench-AA: **67%** (Artificial Analysis — 2nd to GPT-6 Astra's 69%)
- APEX-Agents: **57.5%** (xAI table; Fable 5 59.2, Sol 56.7)
- APEX-SWE: **56.4%** (xAI table; Fable 5 58.8)
- Harvey LAB (Vals): **15.8%** (best in its table; Sol 2.5%, Fable 5 11.3%)
- Terminal-Bench v3.0: **26%** (xAI table; Sol 34.6, Fable 5 34.1 — weak on the harder TB variants)
- Claw-Eval / MCP-Atlas / Tau: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** at high effort, #21/200 (AA v4.3.2, median 24); xAI's own launch table cites **61** on the Index (older version, ties Sol 61, behind Fable 5 62) — version discrepancy flagged
- GPQA Diamond / HLE / MRCR / LCR: no verified public rows surfaced this pass
- Verbosity: 94M output tokens across the AA Index; 59.8 tok/s (slower than average); TTFT 41.52s

Coding:

- CursorBench v3.2: **69.9%** (xAI table; Fable 5 70.5, Sol 67.2)
- CursorBench 4.0 (xhigh): **41.4** ($6.10/task, 49,814 tokens; high: 40.4 at $5.20; medium: 36.1; low: 33.4) — Cursor, 2026-09-10
- DeepSWE v1.1: **65.9%** (xAI table; Sol 73%, Fable 5 70%)
- FrontierCode v1.1 (Extended): **61.3%** (xAI table; Fable 5 63.6, Sol 60.6)
- SWE-bench Verified / Pro / LiveCodeBench / SciCode: no verified public score found

Long context:

- 500K window; no MRCR/RULER retrieval numbers published

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA 1753 hits the ~1750 frontier ref, AA-Briefcase 1577 and Harvey LAB 15.8% are best-in-table, and AutomationBench-AA 67% is #2 overall — docked for the 26% Terminal-Bench v3.0 collapse and xAI-harness provenance.
- **Reasoning: 78/100.** AA Index 44 (#21/200) is the same zone as Qwen3.8-Max (45) and above GPT-5.5 (38); xAI's own-table 61 reading shows version ambiguity, and GPQA/HLE rows are unpublished.
- **Context window: 86/100.** 500K puts it at the floor of the 500K–1M band (85–94); no output cap published and no retrieval numbers.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band; visual-project strength is qualitative, not benchmarked.
- **Coding: 80/100.** CursorBench 69.9%/41.4 and FrontierCode 61.3% are strong, but DeepSWE 65.9% trails Sol/Fable and TB3.0 26% is weak — upper-mid band.
- **Cost efficiency: 74/100.** $2/$6 matches the Qwen3.8-Max anchor; 75% cache discount helps, but $6.10 per Cursor task at xhigh and 2x-priced fast variant don't. No free tier, no Batch API.
- **Overall Score: 79.2/100.** (87+78+86+65+80)/5 = 79.2. Best fit: long-running agentic and knowledge-work projects (GDPval/Briefcase class) at mid-tier prices — not the pick for frontier coding depth (Sol/Fable) or million-token contexts.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: xAI launch post and evals table, Artificial Analysis model page, LLMReference dossier with Cursor rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
