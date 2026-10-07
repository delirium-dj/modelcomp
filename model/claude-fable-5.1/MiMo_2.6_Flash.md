# Claude Fable 5.1 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Fable-line capability ceiling (released 2026-09-01) for the hardest reasoning, long-horizon agentic coding, and knowledge work — a step up from Fable 5 with a 75% cheaper cache-read price. Same underlying model as the restricted Claude Mythos 5.1 (different safeguard configuration; Mythos requires Cyber/Life-Sciences Verification Program access) — Mythos is the trusted-access sibling, not a separate model entry.
- **Provider / access:** Claude API (`claude-fable-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry/Azure, Claude Platform on AWS; Claude Pro/Max/Team/Enterprise apps. Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-01; reliable knowledge cutoff June 2026 (training-data cutoff also Jun 2026).
- **IDs:** `anthropic/claude-fable-5-1` (gateway routes) / `claude-fable-5-1` (native).
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (300K batch beta on the platform).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking always on; efforts low/medium/high/xhigh/max; default `high` in Claude Code, `medium` in Cowork/claude.ai); tool calls yes (computer use, code execution, web tools).
- **Pricing (as of 2026-10-07):** $10 in / $50 out per 1M (unchanged from Fable 5); **cache read $0.25/M (75% cut → ~25% lower typical workload cost, up to ~45% on agentic workloads)**; 5m cache write $12.50, 1h $20; Batch API 50% off ($5/$25). Paid, no free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic, max effort; Mythos 5.1 sibling 60.9%) — AA-independent runs put other models at 57–59%, so this is board-competitive. Terminal-Bench 2.1: no verified public score found for Fable 5.1.
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, ±3.5–4.5 pts; vs Fable 5 24.7%).
- GDPval-AA v2: **1853** Elo (Anthropic; vs Opus 5 1824, GPT-5.6 Sol 1711).
- OSWorld 2.0 (computer use, Aug 2026 task release): **77.9% partial / 41.7% strict** (Anthropic).
- AutomationBench: **31.4%** (Anthropic/Zapier-style run; Fable 5 17.1%). CursorBench 3.2.0: **73.4%** (Anthropic; new reported high).
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE: **60.9%** no tools, **65.0%** with tools (Anthropic).
- GPQA Diamond: **92.6%** (Data Science Dojo summary of Anthropic figures) / 93.7% (cross-vendor comparison table) — third-party default-effort harnesses report much lower (72–75%), so the number is setting-dependent.
- Artificial Analysis Intelligence Index: **66** at max effort (AA launch analysis; Opus 5 63, Fable 5 62) — one tracker lists 53.1 on a different (v4.3 fallback) config.
- ProofBench v1.1: **100%** formal proofs. ARC-AGI-2/3, LCR, CritPt, Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **95.0%** (Anthropic, per Data Science Dojo compilation). SWE-bench Pro: **80.0%**.
- LiveCodeBench: **90.52%** (rank 1 at launch). DeepSWE v1.1: **67.4%** (OpenAI's cross-vendor launch table).
- CursorBench 3.2.0 73.4% as above; SciCode / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR / RULER / ProgramBench retrieval number found — "no long-context retrieval reported" beyond the 1M window spec.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA v2 1853 clears the 1750+ frontier ref, TB4.0 55.8% and TB-Science 52.6% are field-leading, OSWorld 77.9% partial and CursorBench 73.4% are top-tier; capped below 94 by AutomationBench 31.4% (mid) and no TB2.1/Tau3/Claw-Eval row.
- **Reasoning: 94/100.** HLE 60.9 no-tools far above the 40% ref, AA Index 66 above the 60+ ref, GPQA 92.6–93.7 above the 90% ref — three of four frontier refs cleared; no MRCR/LCR number holds it below 95.
- **Context window: 95/100.** 1M window at the ≥1M tier floor; no needle-retrieval result published to justify more.
- **Multimodal: 68/100.** Text + image in, text out = the 60–70 band; no video/audio/PDF input, no non-text output.
- **Coding: 93/100.** SWE-bench Verified 95.0%, SWE-bench Pro 80.0%, LiveCodeBench 90.52% (rank 1), TB4.0 55.8%, ProofBench 100% are all frontier-grade; capped at 93 by DeepSWE 67.4% (below the 74% ref) and no SciCode/Vibe rows.
- **Cost efficiency: 36/100.** Headline $10/$50 is the methodology's 30 anchor, but the $0.25 cache reads (2.5% of input, 4× cheaper than GPT-6 Astra's $1.00) and 50% batch discount cut agentic cost ~25–45% — worth +6 over the raw anchor, still an expensive model.
- **Overall Score: 88/100.** (91+94+95+68+93)/5 = 88.2 → 88 — Anthropic's top general-purpose reasoning/coding ceiling for the hardest long-horizon work, best when cache-heavy agent loops amortize the $10/$50 rate.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + platform docs, Benchgen, Data Science Dojo, EyesTech, ModelRegistry, cross-vendor launch tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
