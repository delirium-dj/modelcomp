# Gemini 4 Argon (High) — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-4-argon`, reasoning effort "high")
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High)
- **Short description:** Google DeepMind's most powerful frontier model, released 2026-09-30, gated at launch: unrestricted access goes first to vetted cybersecurity defenders via the Fairwind Program (Wiz is the one named participant), with paid API access and Google AI Ultra subscribers to follow after additional testing. Google says it gates the release over the model's offensive cyber capabilities; leads rivals on most of the 18 vendor-disclosed benchmarks but trails Claude Opus 5.5 on coding-agent tasks.
- **Provider / access:** Google API (1 provider per Artificial Analysis); unrestricted access currently limited to Fairwind Program defenders/governments/critical-infrastructure operators; refuses cyberattack/CBRN requests; participating in the U.S. government's voluntary pre-release model access process.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-4-argon` (high effort; state explicitly: no Free ID exists on Zen — access is gated/paid, no public free tier).
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specifications, 2026-10-01); max output not separately disclosed.
- **Modalities:** text + image input; text output; reasoning yes (extended thinking); tool calls yes (agentic benchmarks); JSON mode not verified.
- **Pricing (as of 2026-10-01):** $2.00 / 1M input, $10.00 / 1M output (Google API, via Artificial Analysis; blended ~$1.47 / 1M at 7:2:1 cache/input/output). Cache discount 95%. No free tier — Fairwind access is vetted, not free.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: no verified public absolute score found for this ID (vendor-disclosed: trails Claude Opus 5.5 by 9 points — Argon's biggest disclosed deficit; source: StartupFortune reporting VentureBeat figures, 2026-10-01)
- Zapier AutomationBench: **51.3%** (vs Opus 5.5 42.5%) (source: StartupFortune / VentureBeat, 2026-10-01)
- Harvey Legal Agent Benchmark: **19.6%** (vs Astra 5.4%, Opus 5.5 3.8%) (source: StartupFortune / VentureBeat)
- Vals Index (economic tasks — finance/law/tax): **68.9%** (vs Opus 5.5 67.0%, Astra 63.1%) (source: StartupFortune / VentureBeat)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (individual AA eval not public)
- Claw-Eval / ClawProBench: no verified public score found
- Artificial Analysis Intelligence Index (includes AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0): **53** (source: Artificial Analysis, rank #8 of 223; class median 26)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, rank #8 / 223, top ~4%)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Vendor claim (unquantified): found a critical vulnerability in healthcare software used by hospitals worldwide that earlier frontier models missed (Google, via StartupFortune).

Coding:

- DeepSWE v1.1: **77.9%** (vs Opus 5.5 74.2%, Astra 74.1%) (source: StartupFortune / VentureBeat, 2026-10-01)
- CWE-bench v1 (real catalogued software vulnerabilities): **68%** (source: StartupFortune / VentureBeat)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No long-context retrieval reported (1M window stated; no MRCR/RULER measurement found).

Speed / cost / other verified measurements (Artificial Analysis, 2026-10-01):

- Output speed: **N/A** — not yet measured.
- Cost per Intelligence Index task: **$1.99**.
- Verbosity: 110M output tokens across the Intelligence Index (somewhat verbose vs 82M median).
- Vendor-disclosed spread: leads outright on 12 of 18 disclosed benchmarks, ties for first on 1 (VentureBeat).

### Normalized scores (1–100)

- **Tool use: 72/100.** Zapier AutomationBench 51.3% (well ahead of Opus 5.5's 42.5%) and Harvey Legal Agent 19.6% (4–5× the rivals) evidence strong agentic work; AA II rank #8/223 corroborates; absolute Terminal-Bench 4.0 number missing (trails Opus 5.5 by 9 pts) caps it below frontier 90+.
- **Reasoning: 83/100.** AA Intelligence Index 53 at rank #8/223 (top ~4% of the reasoning class; median 26) maps to ~83 on the methodology anchors (Index 60+ → 90–100); Vals 68.9% supports strong cross-domain reasoning. Capped by no public GPQA/HLE/LCR individual scores.
- **Context window: 95/100.** 1M-token verified window → ≥1M tier (95–100); scored 95 since no measured ≥98% retrieval at 512K+ is publicly available.
- **Multimodal: 65/100.** Text + image input, text-only output (verified AA spec) → 60–70 band; no video/PDF/audio input verified.
- **Coding: 88/100.** DeepSWE v1.1 77.9% clears the methodology frontier threshold (DeepSWE 74%+ → 90–100) and leads Opus 5.5 (74.2%) and Astra (74.1%); docked 2 pts for the 9-point Terminal-Bench 4.0 deficit vs Opus 5.5 and missing SWE-bench Verified numbers. Capped by incomplete public coding coverage.
- **Cost efficiency: 74/100.** $2.00/$10.00 per 1M (blended ~$1.47, cache discount 95%) and $1.99 per Intelligence Index task (verbosity-heavy at 110M tokens) — between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; currently gated so no practical access at any price. Excluded from Overall.
- **Overall Score: 81/100.** (72 + 83 + 95 + 65 + 88) / 5 = 80.6 → 81. Best-fit recommendation: a frontier-intelligence model for security defense, legal/economic agentic work, and hard coding — but practically inaccessible until paid API access opens; the Fairwind gating and offensive-cyber posture make it a wait-and-see pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, StartupFortune reporting of Google/VentureBeat disclosed figures, fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
