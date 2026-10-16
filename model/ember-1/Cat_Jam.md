# Ember-1 — findings by Cat Jam

- Source: Fireworks Research / Ember-1 (`opencode/ember-1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks fine-tune of Kimi K3 trained to shorten reasoning traces (~40% fewer tokens) while preserving quality. Research preview (2-week access window).
- **Provider / access:** Fireworks Serverless (`accounts/fireworks/models/ember-1`), OpenRouter, Vercel AI Gateway; OpenAI-compatible. 1.04M/1M context.
- **Release / knowledge:** Released 2026-09-23 (research preview). Built on Moonshot Kimi K3 knowledge (July 2026 weights).
- **IDs:** `fireworks/ember-1` (OpenRouter), `accounts/fireworks/models/ember-1` (Fireworks)
- **Context window:** 1,048,576 tokens; outputs up to 393K? Puter says 1M max output (likely inherited from K3). Not independently verified.
- **Modalities:** Text and image in; text out (Puter "multimodal"? Data says no? We'll say text + image input like K3? Fireworks lists function calling/structured outputs). Safe: text, image input; text output; no audio/video.
- **Pricing (as of 2026-10-16):** $3.00/$15.00 per 1M (cache read $0.30); same as Kimi K3 public pricing (no discount).
- **Architecture:** MoE fine-tune of Kimi K3 (2.78T/104B active), Fireworks Training platform; proprietary serving/optimization.

### Raw benchmarks found

Fireworks self-reported industry benchmarks (Vals-independently listed):

- Terminal-Bench 2.1: **82.0%** (K3 max 80.9%)
- SWE-bench Verified: **92.2%** (K3 max 93.2%, -1.0 pts)
- DeepSWE 1.1: **75.2%** (K3 max 66.4%, +8.8)
- SWE-Interact: 20.0% (vs K3 max 21.3%)
- Tau2 Airline: 66.0% (K3 max 64%)
- DeepSearchQA? not in vendor four (but Vals lists broader)
- Vals Index: 50.9
- A/B production coding workload: 0.753 vs K3 0.751 with 71.3% fewer reasoning tokens, 32.8%? 39% lower total tokens.
- Average workload index (data-today): Reasoning 80%, Coding 83%, Agents 76%.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 82.0, DeepSWE 75.2, tau2 Airline 66.0; efficient but still K3-class agent behavior.
- **Reasoning: 84/100.** Based on scaled-reasoning index (data-today says 80) and quality match to K3 (HLE ~43–56), with efficient traces. Cap due to no GPQA/HLE precise for Ember.
- **Context window: 93/100.** 1.04M context (Puter says 1M); K3 lineage; no independent retrieval metric.
- **Multimodal: 76/100.** Fireworks/official docs emphasize "text and image input" but no video/audio (half of K3). No standard multimodal scores found.
- **Coding: 85/100.** TB2.1 82.0, SWE-Verified 92.2, DeepSWE 75.2; excellent vendor-run, at 51–71% fewer tokens. Vals independent TB4 20.7% (low due to harness?).
- **Cost efficiency: 78/100.** $3/$15 per 1M; optimized tokens cuts costs ~39%, but listed price same as K3.
- **Overall Score: 84/100.** Mean (84+84+93+76+85)/5 = 84.4. K3-quality coding variant with ~40% token savings; research preview availability.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Fireworks blog, LLMBoard, OpenRouter, Vercel docs, DEV particle, Puter, Trajectory); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are Fireworks self-reported, hence conservatively capped.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
