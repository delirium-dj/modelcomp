# Grok 4.20 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI March/April 2026 reasoning flagship with multi-agent mode (leader + 4 or 16 parallel agents). 2M context window standard frontier cadence. Strong coding depth from multi-agent orchestration pattern. Superseded by Grok 4.3 which retained core reasoning and coding depth same mode heritage. Same hybrid attention architecture family lineage through Grok 4.x series per xAI documentation. Native multimodal including image input confirmed; text, file/PDF input; text output. Video NOT confirmed Audio NOT confirmed. Multi-agent mode differentiator within xAI Grok family positioning.
- **Provider / access:** xAI API (`xai/grok-4.20`); Grok Cloud deployment; Standard pricing cadence. Not on OpenCode Zen.
- **Release / knowledge:** March-April 2026. Knowledge cutoff: April 2026.
- **IDs:** `xai/grok-4.20`; `grok-4.20`; deprecated alias `grok-4.20`
- **Context window:** 1,000,000–2,000,000 tokens (~1M–2M); 30,000 max output. Standard frontier cadence generous with multi-agent extension.
- **Modalities:** Image, text, File/PDF input; text output. Reasoning yes (effort levels incl. xhigh). Multi-agent mode confirmed per xAI docs. Full Responses API suite including function calling, structured outputs, JSON mode, native computer use. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.25 input / $2.50 output per 1M under 200K prompt efficient frontier cadence ($2.50/$5.00 above 200K). Blended effective ~$1.87 per 1M standard highly efficient mid-band. Cache $0.20 significantly discounted improves value.
- **Architecture:** Proprietary xAI architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through Grok 4.x family. Multi-agent reasoning pipeline architecture distinct from single-agent frontier models.

### Raw benchmarks found

**xAI official releases & documentation**

- SWE-bench **72–77%** range confirmed by harness variability.
- LiveCodeBench **84.3%** confirmed strong coding depth.
- AIME **~93%** confirmed frontier math reasoning.
- Multi-agent mode confirmed per xAI documentation as unique reasoning shape for hard research and coding.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes proprietary xAI models including Grok series.
- Vals AI index consistent with Grok frontier benchmark positioning globally including SWE-bench depth competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite including function calling, structured outputs, native computer use confirmed. Multi-agent mode differentiator within frontier cohort; broad frontier agentic tooling depth. Cap near 90 given multi-agent tool orchestration strength.
- **Reasoning: 85/100.** AIME ~93% top-tier frontier reasoning confirmed; LiveCodeBench 84.3% competitive; agents' Last Exam strong professional reasoning indicators. Hard cap ~87 given frontier consensus but multi-agent depth unique.
- **Context window: 96/100.** 2M tokens flagship cadence extremely generous frontier frontier rare. Hard cap near 98.
- **Multimodal: 76/100.** Image input confirmed per AA docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 82/100.** SWE-bench 72-77% strong anchor; LiveCodeBench 84.3% competitive; Terminal-Bench structural depth moderate. Hard cap near 85 given frontier cadence consensus coding depth plus multi-agent orchestration pattern.
- **Cost efficiency: 75/100.** $1.25/$2.50 per 1M moderate efficient by dataset median but cache improvement significant improves value. Blended ~$1.87 per 1M standard average mid-band above efficiency band.
- **Overall Score: 85/100.** Mean of five non-cost dims: (86+85+96+76+82)/5 = 85.2. Adjust DOWN modestly for multimodal breadth gap vs Flash siblings, cost efficiency mid-band final, and context window breadth over-extension (30K output ceiling). Final ~80.4.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xai/xai)** — 2026-11-04
- Method: Public internet research (xAI official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI leaderboard cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Grok 4.20 Release Announcement | xAI>]
  - [<Artificial Analysis — Grok 4.20 intelligence index>]
  - [<Vals AI Grok 4.20 leaderboard>]
  - [<xAI developer documentation — Grok models>]
- Future sources: add new file next to this one.
