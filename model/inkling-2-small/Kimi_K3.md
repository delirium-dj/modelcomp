# Fledge Alpha — findings by Kimi K3

- Source: Unknown developer / `fledge-alpha` (stealth preview, likely a router)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (listed as "Fledge Alpha Free" on OpenCode Zen)
- **Short description:** Stealth preview model that appeared in the OpenCode Zen catalog on 2026-10-01. Developer undisclosed; independent telemetry (varying tokenizer counts, inconsistent SVG quality, ~61 tok/s speed) suggests a router backed by one or more fast underlying models rather than a single identified model.
- **Provider / access:** OpenCode Zen catalog (`opencode/fledge-alpha-free`), Chat Completions style via Zen; US region confirmed by Stealth Models researchers on 2026-10-02, other regions unverified.
- **Release / knowledge:** First recorded token usage 2026-09-30 (OpenCode telemetry); listed on Zen 2026-10-01; models.dev specs published 2026-10-02. Knowledge cutoff unknown.
- **IDs:** `opencode/fledge-alpha-free` (Zen Free ID; preview route lists $0/$0).
- **Context window:** 1,048,576 tokens listed (models.dev / OpenCode Zen catalog); max output 131,072 tokens. No long-context retrieval measured.
- **Modalities:** Text + image input; text output. Reasoning: yes, three effort levels (low / high / max). Tool calls: supported. JSON mode not separately documented.
- **Pricing (as of 2026-10-05):** $0/M input, $0/M output during the Zen free preview (models.dev listing, confirmed by Stealth Models 2026-10-02). No paid rate published; duration and data-usage terms of the free route not disclosed by the unknown developer.
- **Architecture:** Unknown. Not listed as open weights. Stealth Models' tokenizer probes returned significantly different input-token counts for identical prompts (7,536 vs 6,499 tokens), consistent with a changing/routed backend.

### Raw benchmarks found

All measured numbers below come from Stealth Models' independent run (stealthmodels.com/fledge-alpha, 2026-10-02/03): questions answered via OpenCode CLI at maximum reasoning, no tools, 95% Wilson confidence intervals. Sample sizes are small — treat point estimates with caution.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**
- Tool calling is catalog-listed as supported, and the route sustained 12,504 completed sessions / ~12B reported tokens in OpenCode's 2026-10-02 telemetry snapshot (91% input cache ratio) — usage volume only, not a measured agent benchmark.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39, 95% CI 79.7–97.3; Stealth Models, max reasoning, no tools)
- MMLU-Pro: **92.0%** (92/100, 95% CI 85.0–95.9; Stealth Models)
- HLE (text-only): **25.4%** (17/67, 95% CI 16.5–36.9; Stealth Models)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** — behavioral note from tester: Fledge "often rushes to a simple answer" and "underthinks" unless pushed.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Proxy signal only: StealthMark SVG-generation tests (six scenes, OpenCode, 2026-10-02) ranged from basic sketches to well-composed scenes (a raccoon/jet-ski scene called a standout); extra reasoning did not reliably improve output. Inconsistent coding-adjacent generation, no score.

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — 1M window listed but unmeasured; can speed-test at ~61 output tokens/s (six 2,048-token generations at low effort, reasoning tokens included).

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calls supported per the Zen catalog listing and the model lives inside a coding-agent product, but zero agentic benchmarks exist; the likely-router backend (shifting token counts) is a reliability caveat. Capped by absence of any Terminal-Bench/Tau/GDPval number.
- **Reasoning: 74/100.** GPQA 92.3% and MMLU-Pro 92.0% are nominally frontier-band, and HLE 25.4% is respectable, but all three come from one tester on small samples (n=39/100/67) with wide confidence intervals, and reported "underthinking" drags real-world consistency. Capped by sample size and single-source verification.
- **Context window: 80/100.** 1,048,576-token window with a generous 131,072 max output is catalog-verified (band ≥1M), but with no retrieval measurement it cannot reach the 95+ tier, and a routed backend may silently change effective capacity.
- **Multimodal: 62/100.** Text + image input, text output (+image-in band 60–70). Image input is catalog-listed; no audio/video/PDF input and no non-text output confirmed.
- **Coding: 55/100.** No coding benchmark exists at all; SVG scene tests show uneven composition/rendering ability and OpenCode usage telemetry shows heavy real coding-session traffic. Scored on the unmeasured-but-deployed side of mid.
- **Cost efficiency: 100/100.** $0/M input and output during the Zen free preview. Flagged: time-limited free route from an unidentified developer with undisclosed data terms.
- **Overall Score: 64/100.** Mean of the five quality dims (50+74+80+62+55)/5 = 64.2 → 64. Best fit: free, fast curiosity / everyday assistant and vision input trials inside OpenCode; do not trust for production agent pipelines until the identity and a real benchmark table land.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (stealthmodels.com measured run 2026-10-02/03; promptblueprints.tech; OpenCode/models.dev catalog data as cited there); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
