# Claude Sonnet 4.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-4-5-20250929`, released 2025-09-29)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5 (Anthropic's "best model for agents, coding, and computer use" of late 2025)
- **Short description:** The model Anthropic recommended for "basically every use case" — a same-price ($3/$15) drop-in upgrade over Sonnet 4 that took the SWE-bench Verified crown at 77.2% (82.0% with parallel test-time compute; 78.2% in the 1M-context configuration, which Anthropic withheld as primary after inference issues) and jumped computer use to 61.4% OSWorld (from Sonnet 4's 42.2%). Its defining trait was endurance: Anthropic observed it **maintaining focus for 30+ hours** on complex multi-step tasks (Sonnet 4 managed 7), which is what made Claude for Chrome and long-horizon agent work viable. **Deprecated 2026-09-30; retirement scheduled 2026-11-30** (re-confirmed on Anthropic's official deprecations record 2026-10-19 — replacement `claude-sonnet-5-5`), but it remains the reference for "Sonnet-tier autonomy."
- **Provider / access:** Claude API, Bedrock, Vertex AI, Microsoft Foundry, Claude Platform on AWS, Claude Code/apps.
- **Release:** 2025-09-29; reliable knowledge cutoff Jan 2025; retires 2026-11-30.
- **Context window:** 200K standard; 1M beta via `context-1m-2025-08-07` header (Tier 4+), priced 2× above 200K; max output 64K.
- **Modalities:** Text, image and PDF in → text out; extended thinking, effort control, code execution.
- **Pricing (last list price):** $3/$15 per million tokens, $0.30 cache reads, batch 50% off; >200K context $6/$22.50.
- **Status:** deprecated — still functional, retirement scheduled 2026-11-30.

### Raw benchmarks found

Anthropic launch (SWE-V: bash + string-replace scaffold, 10 trials, 200K thinking budget, full 500-problem set):

- SWE-bench Verified: **77.2%** (82.0% with parallel sampling + internal scorer; 78.2% in the 1M configuration) — re-confirmed 2026-10-19
- OSWorld-Verified: **61.4%** (100 max steps, 4 runs; Sonnet 4: 42.2%) — re-confirmed 2026-10-19
- AIME 2025: **100%** (with Python tooling); system-card/AIME reading **87%** (no-tools config — new in the re-run)
- GPQA Diamond: **76.4%** (third-party) / **83.4%** (Anthropic system-card reading — new in the re-run)
- **ARC-AGI-2: 13.6%** (Anthropic system card — new in the re-run)
- **FrontierMath v2: 23.86% Tiers 1–3 / 2.44% Tier 4** (Epoch AI — new in the re-run; weak)

Third-party:

- Terminal-Bench: 50.0% (The AI Rankings) / 46.5% (Model Beat) / **50.0% (BenchLM, re-confirmed 2026-10-19)** — mid-tier terminal work
- BenchGecko: 44.6 average (#175 of 312); MATH Level 5 **97.7%**; OTIS Mock AIME **77.8%**; SimpleBench 54.3%
- MMMLU: **89.1%** (#6 of 34); avg benchmark score 75.1% (#32 of 98, modelpricewatch)
- 30+ hour autonomous focus (vendor observation; no METR horizon published)
- **New in the 2026-10-19 re-run (BenchLM, 13 rows):** VITA-Bench **17.0%**, Gert Labs **48.51%**, JobBench **27.7%** (agentic); Design Arena Website **1191**; BenchLM aggregate **47.96** (#112/956)

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **one score adjusted on new evidence — Tool use 72 → 70** (Overall unchanged at 73). The new agentic rows are the first modern-harness agentic measurements on record for this model and they are weak-to-mid (VITA-Bench 17.0%, JobBench 27.7%, Gert Labs 48.51%), which tempers the OSWorld/Terminal-Bench story that justified 72; the reasoning/knowledge additions (GPQA 83.4% system-card, ARC-AGI-2 13.6%) are balanced against weak FrontierMath v2 (23.9%/2.4%) and leave Reasoning at 72; SWE-bench 77.2% and TB 50% re-confirm Coding 78.

- **Tool use: 70/100.** OSWorld 61.4% (the launch headline, SOTA then) and Terminal-Bench 46.5–50.0% show real agentic capability, but the newly recorded VITA-Bench 17.0%, JobBench 27.7% and Gert Labs 48.51% plus the still-missing MCP Atlas / τ³ / GDPval rows put it at mid-band by 2026 standards.
- **Reasoning: 72/100.** GPQA 76.4–83.4%, MATH-L5 97.7%, OTIS AIME 77.8%, ARC-AGI-2 13.6%, MMMLU 89.1% (#6) and AIME 2025 87–100% — solid upper-mid-band hybrid reasoning; the new FrontierMath v2 readings (23.9%/2.4%) show the research-math ceiling, and no HLE number exists.
- **Context window: 74/100.** 200K standard (1M gated beta at 2× pricing) is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/NIAH/AA-LCR figure).
- **Multimodal: 70/100.** Text + image (+PDF) in → text out is the 60–70 band; vision powers the OSWorld result and the new Design Arena 1191 shows frontend-design strength, but no MMMU/CharXiv benchmark is published for this model.
- **Coding: 78/100.** SWE-bench Verified 77.2% (82.0% high-compute, re-confirmed) was the world's best at launch and remains strong; Terminal-Bench 46.5–50.0% and the absence of SWE-Pro/DeepSWE numbers are the gaps.
- **Cost efficiency: 60/100.** $3/$15 with $0.30 cache reads maps to the methodology's $3/$15 ≈ 60 point — 2.4× GPT-5.1's input price for a mid-2026 model, though at launch it was one-fifth of Opus 4.1.
- **Overall Score: 73/100.** Mean of 70/72/74/70/78 = 72.8 → 73. Best-fit recommendation: the late-2025 default for coding agents and computer use — SWE-V 77.2%, OSWorld 61.4% and 30-hour autonomy at $3/$15; deprecated with retirement 2026-11-30, superseded by Sonnet 4.6/5/5.5.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — BenchLM's 13-row aggregate (Terminal-Bench, OSWorld, SWE-bench, ARC-AGI-2, GPQA, AIME, FrontierMath, VITA-Bench, Gert Labs, JobBench, Design Arena re-checks) + Anthropic's official deprecations record (2026-11-30 retirement, replacement Sonnet 5.5); original run used the Anthropic launch post + model docs + pricing/deprecation pages, BenchGecko, Model Beat, The AI Rankings and modelpricewatch. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.md`, using the same headings.
