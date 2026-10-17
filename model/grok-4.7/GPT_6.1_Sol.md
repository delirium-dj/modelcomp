# Grok 4.7 — findings by GPT 6.1 Sol

- Source: xAI / `grok-4.7`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.7
- **Short description:** Proprietary successor focused on coding/professional agent work; not assumed uniformly superior to4.6 [S1,S2].
- **Provider / access:** Native xAI, gateway routes; functions/structured output/reasoning, no Batch [S1].
- **Release / knowledge:** September21,2026 per Vals; cutoff not independently primary-verified [S2].
- **IDs:** `grok-4.7`; no verified Free API ID.
- **Context window:**500,000; Vals500K generation budget, not500K output plus500K input [S1,S2].
- **Modalities:** Text/image input, text output; file workflows via harness. Native audio/video unverified [S1,S2].
- **Pricing (2026-10-17):** <200K prompt$2 input/$0.50 cache/$6 output per million; >=200K$4/$1/$12 for whole request. High default, low/medium/high/xhigh supported [S1].
- **Architecture:** Proprietary; exact size unverified.

### Raw benchmarks found
Agent / tool use:
- Vals xhigh/temp0.7/top_p0.95/500K default: TB4 **28.79% ±2.31**, SRE **3.82% ±1.19**, financev2 **52.25% ±0.35**, legal-agent **12.50% ±2.66**, legal research **47.12% ±3.47**, tax-agent **34.20% ±3.42** [S2]. Historical TB2.1 **73.41%**; current/historical suites separate. Tau3/Tau2/GDPval/Claw/MCP exact figures not verified.
Reasoning / knowledge:
- AA v4.3.2 **46 xhigh/high**, low42; xhigh **#30/217** [S3]. Vals Proof **26% ±4.41**, BioMystery **69.26% ±1.33**, Science Index **34.83% ±1.61**, overall Index **54.95% ±1.07 (#16/49)** [S2]. Exact GPQA/HLE/CritPt/LCR/MLCR/Omniscience rows not exposed in inspected direct sources.
Coding:
- Vals Vibe1.1 **86.17% ±2.18**, migration **44.82% ±4.21**, IOI **57.72% ±1.99**, multimodal SWE **42.92% ±2.26**, ProgramBench **0.50% ±0.50**, terminal-science **10% ±3.61** [S2]. Historical ProgramBench **21.50% almost resolved** not complete-pass0.50. Exact SWE Verified/Pro/LiveCode/DeepSWE/SciCode not verified;4.6 scores not transferred.
Long context / multimodal:
- Primary500K capacity; no exact full-window retrieval verified [S1]. Multimodal SWE confirms image/code grounding, no general image reasoning percentage verified in inspected text [S2].

### Evidence comparison and research trail
Three successful DuckDuckGo queries: `"Grok 4.7" official model`, `"Grok 4.7" independent benchmarks`, `"Grok 4.7" review pricing limitations`. Direct primary exact card, Vals and AA release comparison read. Search reviews discovery-only. Compared against4.6's independently read current profile: Vibe86.17 vs76.24/TB4~29 vs17 improve, but Proof26 vs51 and legal12.5 vs15.83 do not. Effort differs xhigh vs high, so no controlled delta claimed. AA high/xhigh both round46 while low42; higher effort can cost more without changing rounded aggregate. AA **$3.74/index task/240M suite output/93.1tok/s**, Vals **$12.11/test35m30s** use different suites. Dated Vals Index60.22/TB4 28.28 vs current54.95/28.79 retained as snapshots. Initial own assessment; no unsupported predecessor-score edits.

### Normalized scores (1–100)
- **Tool use: 84/100.** Better current terminal and useful legal/finance, capped by SRE/full completion [S2].
- **Reasoning: 85/100.** Current AA46 supports strong broad capability; lowProof26 and missing academic/calibration rows limit ceiling [S2,S3].
- **Context window: 88/100.** Primary500K tier, no verified perfect retrieval [S1].
- **Multimodal: 75/100.** Verified image/document and grounded coding, no audio/video/media output [S1,S2].
- **Coding: 90/100.** Strong Vibe/migration, capped by complete-program/science and missing exact conventional SWE reruns [S2].
- **Cost efficiency: 70/100.** Moderate$2/$6 headline, large xhigh trajectories and200K premium constrain value [S1–S3].
- **Overall Score: 84/100.** (84+85+88+75+90)/5=84.4 →84; supervised image/coding agents at tuned effort. Cost excluded.

### Sources
- [S1] https://docs.x.ai/developers/models/grok-4.7 — exact primary limits/rates/effort/modalities.
- [S2] https://www.vals.ai/models/grok_grok-4.7 — independent xhigh suite and dated launch costs/grades.
- [S3] https://artificialanalysis.ai/models/releases/grok-4-7 — independent current effort comparison and task economics.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three searches, direct primary/evaluator comparison; effort, complete/almost grades and suite changes explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
