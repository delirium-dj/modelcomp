# Claude Mythos 5.1 — findings by GLM 5.3

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most advanced model for coding and knowledge work (Sept 2026) — identical weights to Claude Fable 5.1, but with permissive safeguards for vetted cybersecurity and life-sciences work via trusted access programs. Top use case: unrestricted defensive-security and biological research agent work.
- **Provider / access:** Anthropic trusted access programs only (Cyber Verification Program / Life Sciences Verification Program, in partnership with the US government; currently US organizations). Claude Security is powered by it. **Not on OpenCode Zen** — no public endpoint.
- **Release / knowledge:** 2026-09-01 (with Fable 5.1); knowledge cutoff not publicly disclosed.
- **IDs:** `claude-mythos-5-1` (trusted-access only; **no Zen ID, no public API ID**)
- **Context window:** 1M tokens total (verified via BenchLM model details).
- **Modalities:** text/image in; text out (per Claude platform family API support; no audio/video verified for this exact ID); reasoning yes (effort levels low→max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** not publicly listed (trusted access); twin model Fable 5.1 is $10.00 in / $50.00 out per 1M with cache reads $0.25 — scored on that equivalent pricing.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic official chart + BenchLM `claude-mythos-5-1` — best public TB4.0 score; Fable 5.1 twin scores 55.8% with stricter safeguards)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic official; class-best, vs Opus 5 at 29.0%)
- GDPval-AA v2: **1853** (Anthropic official; Fable 5.1 number, twin weights)
- OSWorld 2.0: **77.9%** partial / **41.7%** strict (Anthropic official, Aug 2026 task release)
- Tau3-Banking / Tau2: **no verified public score found** for this ID
- Claw-Eval / ClawProBench: **no verified public score found**
- AutomationBench: **31.4%** (Anthropic official, business workflows)
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE: **60.9%** no tools / **65.0%** with tools (Anthropic official — best public HLE figures)
- GPQA Diamond: **no verified public score found** for this ID
- LCR / MLCR / CritPt / AA Intelligence Index: **no verified public score found** for this ID
- Omniscience: **no verified public score found**

Coding:

- CursorBench 3.2.0: **73.4%** at max effort (Anthropic official; partner Datadog calls it the most capable model they've run on CursorBench 3.2)
- Terminal-Bench 4.0: **60.9%** (see tool use)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: **no verified public score found** for this exact ID
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (BenchLM); no MRCR/RULER retrieval number published for this ID.

Domain evidence (from the official announcement):

- Protein design: binders 10× higher affinity than best Adaptyv Bio competition entries on three targets; ~50% hit rate across 12 targets.
- GPU kernel optimization: 1.4×–2.5× speedups on seven open-source bio ML models (H100).

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4.0 60.9% is the best public score on the hardest agentic terminal harness, GDPval-AA 1853 clears the 1750+ frontier bar, OSWorld 77.9% partial leads; Tau3 and Claw-Eval unpublished for this ID cap the score.
- **Reasoning: 90/100.** HLE 60.9%/65.0% is the best public HLE result; TB-Science 52.6% class-leading; but GPQA/MRCR/CritPt are all unpublished for this ID — an evidence gap, not a capability verdict.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 75/100.** Text/image (PDF) input per Claude platform family; no video/audio input and no published vision benchmark numbers for this exact ID (bottom of the PDF-input band).
- **Coding: 92/100.** CursorBench 3.2 73.4% (max effort) and TB4.0 60.9% are both class-best; SWE-bench Verified/DeepSWE/LiveCodeBench unpublished for this ID keeps it below the 95+ tier.
- **Cost efficiency: 33/100.** No public pricing (trusted access); twin Fable 5.1 at $10/$50 matches the ~$10/$50 ≈ 30 anchor, lifted slightly by $0.25 cache reads (75% cheaper) and 25–45% lower effective agentic cost vs Fable 5.
- **Overall Score: 89.2/100.** (94 + 90 + 95 + 75 + 92) / 5 = 89.2. Best-fit: the capability ceiling of the Claude line for vetted cyber/bio work; Fable 5.1 is the same intelligence for general use.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Anthropic official announcement + system card reference, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
