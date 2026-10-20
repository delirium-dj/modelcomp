# Ember-1 — findings by Grok 4.6

- Source: Fireworks AI (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first custom model (announced 2026-09-23): a Kimi K3 post-train that emits shorter reasoning traces (~40% fewer tokens in Fireworks' evals) while aiming to keep K3-max quality. Not a new base architecture.
- **Provider / access:** Fireworks serverless `accounts/fireworks/models/ember-1`; OpenRouter `fireworks/ember-1`. Chat Completions-style Fireworks API.
- **Release / knowledge:** Announced 2026-09-23 (Fireworks blog). Knowledge cutoff not stated on the Fireworks model/blog pages fetched.
- **IDs:** `fireworks/ember-1`; path `accounts/fireworks/models/ember-1`. No OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens (LiteLLM / Fireworks catalogs). Third-party spec notes (ARMES) also cite 943,718 max output — not re-verified on the Fireworks blog.
- **Modalities:** Text and image in; text out (ARMES / Fireworks model page). Reasoning traces on. No audio/video path published.
- **Pricing (as of 2026-10-20):** $3.00 input / $0.30 cached input / $15.00 output per 1M on Fireworks. Priority tier cited by ARMES at $3.75/$0.375/$18.75. Same $3/$15 list as public Kimi K3 in Fireworks' own cost plots.
- **Architecture:** Proprietary Fireworks post-train on Moonshot Kimi K3 (sparse MoE). Parameter count for Ember-1 itself is unpublished; do not treat K3's ~2.78T as an Ember spec.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks blog table, N=89; vs K3-max 80.9%)
- Terminal-Bench 4.0: **~20.7%** (Vals AI, ARMES summary)
- τ-2 Bench Airline: **66%** (Fireworks; N=50; vs K3-max 64%)
- Finance Agent v2: **51.9%** (Vals, ARMES)
- Harvey Legal Agent Benchmark: **9.2%** (Vals, ARMES)
- Tau3-Banking / Claw-Eval / GDPval-AA / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- ProofBench v1.1: **61.0%** (Vals, ARMES)
- IOI: **46.3%** (Vals, ARMES)
- Vals Index: **50.94%** (#29/49 at ARMES's citation)

Coding:

- SWE-bench Verified: **92.2%** (Fireworks; N=500; vs K3-max 93.2%)
- DeepSWE 1.1: **75.2%** (Fireworks; N=113; vs K3-max 66.4%)
- SWE-Interact: **20.0%** (Fireworks; N=75; vs K3-max 21.3%)
- Vibe Code Bench v1.1: **83.9%** (Vals, ARMES)
- CyberBench v1.1: **69.5%** (Vals, ARMES)

Long context:

- 1M advertised window. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 82.0% is strong but below the ~88% frontier band; τ-2 Airline 66% is a small-N (50) proxy, not Tau3. Capped by Vals TB 4.0 ~20.7%, legal-agent 9.2%, and missing GDPval/Tau3.
- **Reasoning: 70/100.** No measured GPQA, HLE, or AA Index for this ID — cannot infer K3's science scores. Vals ProofBench 61% / IOI 46.3% / Index 50.94% sit in a mid band. Capped hard by the missing frontier science suite.
- **Context window: 96/100.** 1M maps to the ≥1M tier. Not 100: no ≥98% retrieval at 512K+.
- **Multimodal: 65/100.** Image-in / text-out is the 60–70 band. Capped by no video/audio.
- **Coding: 92/100.** SWE-Verified 92.2% and DeepSWE 75.2% meet/exceed the DeepSWE 74%+ frontier ref; Vibe 83.9% agrees. Capped by SWE-Interact 20.0% and TB 2.1 82% (not 85%+ on the TB coding frontier).
- **Cost efficiency: 60/100.** Matches the methodology $3/$15 ≈ 60 anchor. Shorter traces cut billable output vs K3-max, but the list price is unchanged. No $0 tier.
- **Overall Score: 81/100.** Mean of 84 + 70 + 96 + 65 + 92 = 81.4 → 81 half-up. Best fit: paid K3-class coding where token volume dominates; not the pick if you need published GPQA/HLE or cheap tokens.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Fireworks Ember-1 blog and model page, LiteLLM pricing, Vals/ARMES summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
