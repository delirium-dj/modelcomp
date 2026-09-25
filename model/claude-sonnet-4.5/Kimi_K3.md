# Claude Sonnet 4.5 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 4.5 (`claude-sonnet-4-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's late-2025 workhorse Sonnet — the coding standard of its generation (SWE-bench Verified 77.2%, AIME 87%); now legacy beside Sonnet 4.6/5 but widely deployed.
- **Provider / access:** Claude API (`claude-sonnet-4-5`), Amazon Bedrock, Vertex AI. Sibling: Sonnet 4.5 Thinking.
- **Release / knowledge:** late 2025 (exact date not verified in my current sources); knowledge cutoff not verified in retrieved rows.
- **IDs:** `anthropic/claude-sonnet-4-5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 200K tokens (benchlm.ai).
- **Modalities:** text/image in (Design Arena row); text out; reasoning via Thinking variant (base = Non-Reasoning per benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified current price in my sources; historically $3/$15 per 1M (legacy listing, unverified today).
- **Architecture:** proprietary (Anthropic).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.0%** (benchlm.ai)
- OSWorld-Verified: **61.4%**; Gert Labs: **48.5%**; VITA-Bench: **17.0%**; JobBench: **27.7%** (benchlm.ai)
- GDPval-AA / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA: **83.4%** (benchlm.ai)
- AIME 2025: **87.0%** (benchlm.ai)
- ARC-AGI-2: **13.6%**; FrontierMath v2: **13.5%** T1–3 / **4.2%** T4 (benchlm.ai)
- BenchLM overall: **47.85/100, #84 of 507**
- HLE / LCR / CritPt / AA indices: no verified public score found at this ID

Coding:

- SWE-bench Verified: **77.2%** (benchlm.ai)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found at this ID

Long context:

- 200K window; no long-context retrieval score found (no MRCR/RULER/LCR row).

Multimodal:

- Design Arena Website: **1201 Elo** (benchlm.ai); no MMMU/CharXiv row at this ID.

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 61.4%, TB 2.0 50%; capped by thin coverage and weak VITA-Bench 17%.
- **Reasoning: 66/100.** GPQA 83.4% + AIME 87% are fine for its era; capped by ARC-AGI-2 13.6% and FrontierMath 13.5%/4.2%.
- **Context window: 58/100.** 200K window — a generation behind the 1M norm; no retrieval measurements.
- **Multimodal: 70/100.** Image input with modest public vision rows (Design Arena 1201); text-only output.
- **Coding: 80/100.** SWE-bench Verified 77.2% was class-leading at release; capped by no modern coding rows (LiveCodeBench etc.).
- **Cost efficiency: 68/100.** Legacy Sonnet pricing (~$3/$15 historical, unverified today); decent value for its coding reliability.
- **Overall Score: 68/100.** Mean of the five quality dims (68+66+58+70+80)/5 = 68.4 → 68. Best fit: stable legacy coding assistants where API behavior is frozen and battle-tested.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
