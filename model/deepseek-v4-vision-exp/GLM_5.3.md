# DeepSeek V4 Vision Exp — findings by GLM 5.3

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp (BenchLeader: "Deepseek v4 Flash Vision")
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE for multi-modal code understanding, UI layout reasoning and image-to-code generation. Second pass is a major correction: the model **now has its own BenchLeader page** (distinct from V4.1-Flash) — released **2026-08-21**, measured independently through 2026-10-08, and **served live on three OpenRouter providers at 1M context**. The first pass's "retired upstream / proxy-only" picture applied to the DeepSeek API alias; the SKU itself is alive, fast (221 tok/s, fastest quarter), and directly measured.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (`opencode/deepseek-v4-vision-exp`); OpenRouter — **DeepInfra $0.216/$0.647 (fp8)**, SiliconFlow $0.440/$1.32 (fp8), GMICloud $0.440/$1.32 (fp8), all 1.0M context; DeepSeek API legacy alias (retired → routes to DeepSeek-V4.1-Flash).
- **Release / knowledge:** 2026-08-21 (BenchLeader release date; first pass guessed "mid-2026"); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4-vision-exp` (Zen, $0.14/$0.28); OpenRouter `deepseek/deepseek-v4-flash-vision`; AA tracks `deepseek-v4-flash-vision`.
- **Context window:** **1M tokens** (BenchLeader header + all three OpenRouter provider rows at 1.0M) — the first pass's 200K figure was wrong or superseded; the DeepSeek-API alias route (V4.1-Flash) also serves 1M.
- **Modalities:** text/image/PDF in; text out; reasoning (max effort is its best-measured config); tool calls; JSON mode; images billed as input tokens by dimension.
- **Pricing (as of 2026-10-12):** Zen $0.14 in / $0.28 out per 1M (cached read $0.028) — still the cheapest tracked SKU this cycle; OpenRouter DeepInfra $0.216/$0.647; BenchLeader blended $0.66/M; V4.1-Flash API $0.15/$0.60 off-peak, $0.30/$1.20 peak.
- **Architecture:** experimental native multimodal VL MoE; fp8-served on all OpenRouter providers; parameter count not published.

### Raw benchmarks found

> Second pass replaces the V4.1-Flash proxy rows with the model's OWN BenchLeader page (max effort best, 58.4 **#142/760**, trend 54→59→65 rising, last measured 2026-10-08). Category scores (max): **Agents & tools 70 (its best)**, Composite 69, Long context 66, Multimodal 58, Reasoning 59, **Knowledge 54 (its worst)**.

Agent / tool use (own page):

- **GDPval-AA v2.1: 52.3% #39** — solid own-row (replaces the proxy's 1600 Elo / 55.0%)
- **τ³-Banking: 41.0% #27** — good rank (gap filled; was "no verified public score")
- **Terminal-Bench 2.1 (AA): 74.2% #65** — matches the Vals read (74.5%); the proxy-era "90.6%" BenchLM claim is not reproduced on its own page; **TB 4.0 (AA): 12.1% #78** (weak on the 2026 suite)
- **LiveBench Agentic Coding: 65.1% #6** — elite rank, the standout agent row
- CyberGym 88.1%; AutomationBench 68.9%; HLE w/ tools 63.9% (proxy-era rows, retained with caution); Claw-Eval: still unmeasured

Reasoning / knowledge (own page):

- **GPQA Diamond (AA): 91.3% #48** — clears the 90% frontier bar on its own page (proxy read was 90.9%)
- **HLE (AA): 34.5% #117** — below the 40% reference; CritPt **10.9% #106** (weak)
- LiveBench: Reasoning **85.4% #36**, Mathematics **87.8% #44**, Data Analysis **79.5% #12**, Language 80.4% #28, IF **71.0% #25**, global **76.8% #27** — a strong LiveBench profile
- **Honesty is the severe weakness: AA-Omniscience non-hallucination 8.5% #443** (accuracy 38.6% #126, index −17.6 #223) — the proxy-era 96.5% hallucination rate is confirmed and if anything worse on direct measurement; treat every factual claim it makes as needing verification
- AA Intelligence Index **34.8 #83** (mid); AA-LCR **81.3% #52** (good)

Coding:

- TB 2.1 74.2% #65 (agent-terminal crossover); LiveBench Coding **68.2% #64** (mid); SciCode (AA) **49.6% #107** — below the 55% reference (proxy read was 51.9%; consistent)
- Proxy-era rows retained: DeepSWE 74.2% (frontier-adjacent), Codeforces 3471, NL2Repo 65.4% — image-to-code specialty intact
- SWE-bench Verified / LiveCodeBench: still no verified public score (unchanged gap)

Long context:

- **1M window confirmed** (all three providers); **AA-LCR 81.3% #52** — good measured retrieval; no MRCR/RULER rows.

Multimodal:

- **MMMU-Pro (AA): 74.8% #103** — mid (consistent with the proxy 77.0%); Multimodal category 58; BabyVision w/ Python 89.6%, Chartography w/ tools 78.9%, ZeroBench w/ Python 49.0% retained from the proxy era. Text+image+PDF in, text out.

### Normalized scores (1–100)

- **Tool use: 78/100.** Lowered from 83: the own-page rows are solid-not-elite — GDPval 52.3% #39, τ³ 41.0% #27, TB 2.1 74.2% #65, and the elite LiveBench Agentic 65.1% #6 — but TB 4.0 12.1% #78 shows the newest suite breaks it, and the 90.6% TB claim didn't survive direct measurement.
- **Reasoning: 70/100.** Lowered from 76: GPQA 91.3% #48 and the LiveBench profile are genuinely good, but HLE 34.5% #117, CritPt 10.9% #106, and the catastrophic honesty (non-hallucination 8.5% #443, Omniscience −17.6) cap any reasoning deployment that touches facts.
- **Context window: 92/100.** Raised from 70: 1M confirmed on its own page and all three OpenRouter providers, with good measured retrieval (AA-LCR 81.3% #52) — the first pass scored a 200K figure that no longer (or never) applied to the live SKU.
- **Multimodal: 70/100.** Lowered from 72: the direct MMMU-Pro read (74.8% #103, category 58) is mid; strong chart/Python-tool vision rows remain, text-only output.
- **Coding: 74/100.** Held: proxy-era DeepSWE 74.2% and NL2Repo 65.4% retained, but own-page rows are mid — LiveBench Coding 68.2% #64, SciCode 49.6% #107 under the 55% bar — with still no verified SWE-bench Verified/LiveCodeBench row.
- **Cost efficiency: 97/100.** Held: Zen $0.14/$0.28 remains the cheapest tracked SKU this cycle, DeepInfra $0.216/$0.647 undercuts every rival, and it's in the fastest speed quarter (221 tok/s, 10 s first answer, $0.032 agentic session).
- **Overall Score: 77/100.** (78 + 70 + 92 + 70 + 74) / 5 = 76.8 → 77, up from 75.8 — the 1M-context correction outweighs the honesty drag. Best-fit: ultra-cheap, ultra-fast 1M-context vision-to-code agent — elite LiveBench agentic coding at $0.032/session; never trust its factual claims unverified, and prefer the stable V4.1-Flash API route for production text work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (model's own BenchLeader page as of 2026-10-08 — Artificial Analysis own-SKU harness rows, LiveBench, OpenRouter provider listings incl. DeepInfra/SiliconFlow/GMICloud pricing and 1M context; first-pass V4.1-Flash proxy rows retained where not contradicted; two supplementary DDG-lite searches — one returned no results, one was bot-challenge-blocked, both disclosed); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
