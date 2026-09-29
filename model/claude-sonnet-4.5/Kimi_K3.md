# Claude Sonnet 4.5 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's late-2025 workhorse Sonnet — the coding standard of its generation (SWE-bench Verified 77.2%, OSWorld 61.4%, AIME 87%); now legacy behind Sonnet 4.6/5/5.5, with its retirement commitment window opening 2026-09-29.
- **Provider / access:** Claude API (`claude-sonnet-4-5-20250929`; alias `claude-sonnet-4-5`), Amazon Bedrock (InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS.
- **Release / knowledge:** released September 29, 2025 (Anthropic announcement); reliable knowledge cutoff Jan 2025, training data cutoff Jul 2025 (platform.claude.com model page).
- **IDs:** `claude-sonnet-4-5-20250929` (Claude API; Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`; Vertex `claude-sonnet-4-5@20250929`). Status: Active (legacy); **retirement committed not sooner than September 29, 2026 — that window opens today; migration to Sonnet 5.5 advised**.
- **Context window:** 200K tokens (a 1M-token beta configuration existed at launch; Anthropic reports its primary scores at 200K); max output 64K (platform.claude.com + launch footnotes).
- **Modalities:** text/image in; text out; extended thinking supported (no effort parameter); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $3 / MTok input, $15 / MTok output — verified, unchanged from Sonnet 4 (Anthropic announcement + platform.claude.com pricing); batch 50% off.
- **Architecture:** proprietary (Anthropic).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.0%** (benchlm.ai; Anthropic reports Terminus-2 harness with XML parser)
- OSWorld / OSWorld-Verified: **61.4%** (Anthropic launch — led the field; Sonnet 4 had 42.2%); Gert Labs: **48.5%**; VITA-Bench: **17.0%**; JobBench: **27.7%** (benchlm.ai)
- Maintained focus 30+ hours on complex multi-step tasks (Anthropic launch)
- GDPval-AA / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA: **83.4%** (benchlm.ai)
- AIME 2025: **87.0%** (benchlm.ai; Anthropic notes temp 1.0 sampling, 64K reasoning tokens for the Python config)
- ARC-AGI-2: **13.6%**; FrontierMath v2: **13.5%** T1–3 / **4.2%** T4 (benchlm.ai)
- BenchLM overall: **47.85/100, #84 of 507**
- HLE / LCR / CritPt / AA indices: no verified public score found at this ID

Coding:

- SWE-bench Verified: **77.2%** (Anthropic launch primary, 200K thinking budget, 10-trial average — SOTA at release); **78.2%** in the 1M-context configuration; **82.0%** with parallel test-time compute ("high compute")
- LiveCodeBench / SciCode / DeepSWE: no verified public score found at this ID

Long context:

- 200K window (1M beta config existed); no long-context retrieval score found (no MRCR/RULER/LCR row).

Multimodal:

- Design Arena Website: **1201 Elo** (benchlm.ai); no MMMU/CharXiv row at this ID.

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld 61.4% (field-leading at launch), TB 2.0 50%; capped by thin coverage and weak VITA-Bench 17%.
- **Reasoning: 66/100.** GPQA 83.4% + AIME 87% are fine for its era but below the 87%+ band; capped by ARC-AGI-2 13.6% and FrontierMath 13.5%/4.2%.
- **Context window: 70/100.** 200K base = 70 per band rules (a 1M beta config existed but was not the primary config); no retrieval measurements.
- **Multimodal: 70/100.** Image input with modest public vision rows (Design Arena 1201); text-only output caps the 60–75 band.
- **Coding: 86/100.** SWE-bench Verified 77.2% (mid-high of the 70–80% → 85–93 band), 82.0% with test-time compute; capped by no modern coding rows (LiveCodeBench etc.).
- **Cost efficiency: 60/100.** Verified $3/$15 per MTok → $3/$15 ≈ 60 band anchor; good value for its coding reliability at legacy status.
- **Overall Score: 72/100.** Mean of the five quality dims (68+66+70+70+86)/5 = 72.0. Best fit: stable legacy coding assistants where API behavior is frozen and battle-tested — but commit to migration before the retirement window that opens 2026-09-29.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (Anthropic announcement incl. methodology footnotes + platform.claude.com specs + benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed release 2025-09-29, pricing $3/$15, knowledge cutoff Jan 2025, 200K/64K specs; confirmed SWE-bench 77.2% primary (78.2% @1M, 82.0% high-compute) and OSWorld 61.4% against Anthropic's launch footnotes; flagged retirement window opening today (not sooner than 2026-09-29); band-rule fixes: Context 58→70, Coding 80→86, Cost 68→60, Overall 68→72.
- Future sources: add a new file next to this one using the same headings.
