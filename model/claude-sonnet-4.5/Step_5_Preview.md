# Claude Sonnet 4.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-4-5-20250929`, released 2025-09-29)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5 (Anthropic's "best model for agents, coding, and computer use" of late 2025)
- **Short description:** The model Anthropic recommended for "basically every use case" — a same-price ($3/$15) drop-in upgrade over Sonnet 4 that took the SWE-bench Verified crown at 77.2% (82.0% with parallel test-time compute; 78.2% in the 1M-context configuration, which Anthropic withheld as primary after inference issues) and jumped computer use to 61.4% OSWorld (from Sonnet 4's 42.2%). Its defining trait was endurance: Anthropic observed it **maintaining focus for 30+ hours** on complex multi-step tasks (Sonnet 4 managed 7), which is what made Claude for Chrome and long-horizon agent work viable. Now deprecated (2026-09-30, retires 2026-11-30) in favor of Sonnet 5.5 — but it remains the reference for "Sonnet-tier autonomy."
- **Provider / access:** Claude API, Bedrock, Vertex AI, Microsoft Foundry, Claude Platform on AWS, Claude Code/apps.
- **Release:** 2025-09-29; reliable knowledge cutoff Jan 2025; retires 2026-11-30.
- **Context window:** 200K standard; 1M beta via `context-1m-2025-08-07` header (Tier 4+), priced 2× above 200K; max output 64K.
- **Modalities:** Text, image and PDF in → text out; extended thinking, effort control, code execution.
- **Pricing (last list price):** $3/$15 per million tokens, $0.30 cache reads, batch 50% off; >200K context $6/$22.50.
- **Status:** deprecated — still functional, retirement scheduled 2026-11-30.

### Raw benchmarks found

Anthropic launch (SWE-V: bash + string-replace scaffold, 10 trials, 200K thinking budget, full 500-problem set):

- SWE-bench Verified: **77.2%** (82.0% with parallel sampling + internal scorer; 78.2% in the 1M configuration)
- OSWorld-Verified: **61.4%** (100 max steps, 4 runs; Sonnet 4: 42.2%)
- AIME 2025: **100%** (with Python tooling)

Third-party:

- Terminal-Bench: 50.0% (The AI Rankings) / 46.5% (Model Beat) — mid-tier terminal work
- BenchGecko: 44.6 average (#175 of 312); MATH Level 5 **97.7%**; OTIS Mock AIME **77.8%**; GPQA Diamond **76.4%**; SimpleBench 54.3%
- MMMLU: **89.1%** (#6 of 34); avg benchmark score 75.1% (#32 of 98, modelpricewatch)
- 30+ hour autonomous focus (vendor observation; no METR horizon published)

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld 61.4% (the launch headline, SOTA then) and Terminal-Bench 46.5–50.0% show real agentic capability; no MCP Atlas, τ³ or GDPval number was published, and by 2026 standards the computer-use score is mid-pack (Astra 72.6%, Opus 5 75.4% on OSWorld 2.0).
- **Reasoning: 72/100.** GPQA 76.4%, MATH-L5 97.7%, OTIS AIME 77.8%, MMMLU 89.1% (#6) and AIME 2025 100% with tools — solid upper-mid-band hybrid reasoning; no HLE/ARC-AGI number exists, and Anthropic itself steered pure-reasoning buyers to Opus/GPT-5.
- **Context window: 74/100.** 200K standard (1M gated beta at 2× pricing) is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/NIAH/AA-LCR figure).
- **Multimodal: 70/100.** Text + image (+PDF) in → text out is the 60–70 band; vision powers the OSWorld result but no MMMU/CharXiv benchmark is published for this model.
- **Coding: 78/100.** SWE-bench Verified 77.2% (82.0% high-compute) was the world's best at launch and remains strong; Terminal-Bench 46.5–50.0% and the absence of SWE-Pro/DeepSWE numbers are the gaps.
- **Cost efficiency: 60/100.** $3/$15 with $0.30 cache reads maps to the methodology's $3/$15 ≈ 60 point — 2.4× GPT-5.1's input price for a mid-2026 model, though at launch it was one-fifth of Opus 4.1.
- **Overall Score: 73/100.** Best-fit recommendation: the late-2025 default for coding agents and computer use — SWE-V 77.2%, OSWorld 61.4% and 30-hour autonomy at $3/$15; deprecated with retirement 2026-11-30, superseded by Sonnet 4.6/5/5.5.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic launch post + model docs + pricing/deprecation pages, BenchGecko, Model Beat, The AI Rankings, modelpricewatch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.md`, using the same headings.
