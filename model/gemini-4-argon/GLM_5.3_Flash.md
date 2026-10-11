# Gemini 4 Argon (High) — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-4-argon`, reasoning effort "high")
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High)
- **Short description:** Google DeepMind's most powerful frontier model, released 2026-09-30, gated at launch: unrestricted access goes first to vetted cybersecurity defenders via the Fairwind Program (Wiz is the one named participant), with paid API access and Google AI Ultra subscribers to follow after additional testing. Google says it gates the release over the model's offensive cyber capabilities; leads rivals on most of the 18 vendor-disclosed benchmarks but trails Claude Opus 5.5 on coding-agent tasks.
- **Provider / access:** Google API (1 provider per Artificial Analysis); unrestricted access currently limited to Fairwind Program defenders/governments/critical-infrastructure operators; refuses cyberattack/CBRN requests; participating in the U.S. government's voluntary pre-release model access process.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-4-argon` (high effort; state explicitly: no Free ID exists on Zen — access is gated/paid, no public free tier).
- **Context window:** 1M tokens total (vendor blog + AA, 2026-10-10); max output conflicting: vendor blog claims "industry-leading 1M tokens" output (up from 64K), Vals ran it at 262,144 max output — unresolved, at minimum 256K-class.
- **Modalities:** text + image input (AA FAQ); Vals' model page additionally lists video + file input, and the vendor's LVBench 91.7% SOTA claim implies native video understanding; text output; reasoning yes (extended thinking); tool calls yes (agentic benchmarks); JSON mode not verified.
- **Pricing (as of 2026-10-10):** intro $2.00 / 1M input, $10.00 / 1M output (Google API, via AA; blended ~$1.47 / 1M at 7:2:1; cache discount 95%), rising to $4.00/$20.00 after the intro period per the launch-post footnote — Vals already bills $4/$20 on all its 2026-10-07 leaderboards and no intro end-date is published. No free tier — Fairwind access is vetted, not free.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.58% ±2.31** (Vals AI, mini-SWE-agent, #5/45, $17.64/test; updated 2026-10-07) — leader Opus 5.5 65.15%, Sonnet 5.5 64.14%; the vendor table reads 57.4% (gap to Opus 5.5 ≈ 7.6 pts, revised down from the 9-pt launch read)
- AutomationBench-AA: **77.5%** (AA via The Decoder, 2026-10-03; ~6 pts over Sonnet 5.5 — effort-mismatch caveat: Argon ran High, Sonnet 5.5 Max)
- Vals Index v2.1 (cross-domain economic/agent): **68.90% ±0.97, #1 of 45** ($15.68/test, 46m33s; updated 2026-10-07) — ahead of Sonnet 5.5 67.04%, Opus 5.5 66.97%, Fable 5.1 65.83%
- CyberBench v1.1 (CyberGym/ARVO OSS-Fuzz): **77.86% ±5.30, #2/45** ($5.11/test; #1 GPT-6 Sol 77.98%; updated 2026-10-07)
- Zapier AutomationBench: **51.3%** (vs Opus 5.5 42.5%) (source: StartupFortune / VentureBeat, 2026-10-01)
- Harvey Legal Agent Benchmark: **19.6%** (vs Astra 5.4%, Opus 5.5 3.8%) (source: StartupFortune / VentureBeat)
- Vals Index (economic tasks — finance/law/tax): **68.9%** (vs Opus 5.5 67.0%, Astra 63.1%) (source: StartupFortune / VentureBeat)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (individual AA eval not public)
- Claw-Eval / ClawProBench: no verified public score found
- Artificial Analysis Intelligence Index (includes AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0): **53** (source: Artificial Analysis, rank #8 of 223; class median 26)

Reasoning / knowledge:

- GraphWalks BFS F1 (vendor): **99.7%** @128K, **84.2%** @256K–1M
- RiemannBench (vendor): **76.0%**; LABBench 2 (vendor): **88.8%**
- IOI: **100.00%** (#1 tie); ProofBench v1.1: **99.00%** (#6); Terminal-Bench-Science 0.1: 44.29% (#5) (Vals model page, 2026-10-07)
- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, v4.3.2, rank #8 / 227, top ~4%; page current 2026-10-10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Vendor claim (unquantified): found a critical vulnerability in healthcare software used by hospitals worldwide that earlier frontier models missed (Google, via StartupFortune).

Coding:

- DeepSWE v1.1: **77.9%** (vs Opus 5.5 74.2%, Astra 74.1%) (source: StartupFortune / VentureBeat, 2026-10-01)
- CWE-bench v1 (real catalogued software vulnerabilities): **68%** (tied #1 with GPT-6 Astra; source: StartupFortune / VentureBeat)
- Vibe Code Bench: **91.91%** (#2) and Code Migration: **68.17%** (#2) (Vals, updated 2026-10-07)
- FrontierSWE v2: **55.0%** (vendor; behind GPT-6 Astra 65.5%)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- GraphWalks @256K–1M: **84.2%** BFS F1 (vendor-reported); no independent MRCR/RULER run found.

Speed / cost / other verified measurements (Artificial Analysis, 2026-10-01):

- Output speed: **N/A** — not yet measured.
- Cost per Intelligence Index task: **$1.99**.
- Verbosity: 110M output tokens across the Intelligence Index (somewhat verbose vs 82M median).
- Vendor-disclosed spread: leads outright on 12 of 18 disclosed benchmarks, ties for first on 1 (VentureBeat).

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 4.0 absolute is now published: 57.58% (#5/45 Vals, 2026-10-07), with AutomationBench-AA 77.5% and Zapier 51.3% leading the field, and the Vals Index at #1/45 corroborating the agentic story; still ~7.6 pts behind Opus 5.5 on TB4.0, capping it below the 90+ tier.
- **Reasoning: 85/100.** AA Intelligence Index 53 (#8/227, v4.3.2) plus the Vals Index lead (68.90%, #1/45, updated 2026-10-07), RiemannBench 76.0%, GraphWalks 84.2% @256K–1M and IOI 100%; GPQA/HLE/LCR remain unpublished, capping it below the Index-60+ 90–100 tier.
- **Context window: 96/100.** 1M-token verified window with measured GraphWalks 84.2% at the 256K–1M band (vendor-reported) — above the bare ≥1M floor of 95, short of a 100 without independent retrieval data.
- **Multimodal: 75/100.** Vendor LVBench 91.7% (SOTA, video understanding) and Vals' video+file-input listing put it in the +video/PDF-in band (75–90); AA still lists only text+image in / text out and there is no audio-input evidence — scored at the band floor.
- **Coding: 90/100.** DeepSWE v1.1 77.9% (vendor SOTA claim) now corroborated by independent Vibe Code Bench 91.91% (#2) and Code Migration 68.17% (#2) (Vals, 2026-10-07), plus CyberBench 77.86% (#2); FrontierSWE v2 55.0% trails Astra and SWE-bench Verified remains unpublished — bottom edge of the 90–100 band.
- **Cost efficiency: 74/100.** Intro $2.00/$10.00 per 1M (blended ~$1.47, cache discount 95%, $1.99 per Intelligence Index task at 110M output tokens) — but Vals already bills the announced post-intro $4.00/$20.00 on all 2026-10-07 leaderboards and no intro end-date is published; currently Fairwind-gated so no practical access at any price. Excluded from Overall.
- **Overall Score: 85/100.** (80 + 85 + 96 + 75 + 90) / 5 = 426/5 = 85.2 → 85. Best-fit recommendation: a frontier-intelligence model for security defense, legal/economic agentic work, and hard coding — the 2026-10-07 Vals refresh (Vals Index #1, Finance Agent v2 #1) materially strengthens the case, but it remains practically inaccessible until paid API access opens; the Fairwind gating and offensive-cyber posture still make it a wait-and-see pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-10
- Method: public internet research (second pass 2026-10-10: Google launch blog + vendor benchmark table, Artificial Analysis, Vals AI 2026-10-07 refresh — Vals Index / Finance Agent v2 / Terminal-Bench 4.0 / CyberBench, The Decoder via memeburn); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
