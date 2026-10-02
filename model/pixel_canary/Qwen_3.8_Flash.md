# Pixel Canary — findings by Qwen 3.8 Flash

- Source: Stealth model on Vercel AI Gateway (`stealth/pixel-canary`; creator undisclosed)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth preview)
- **Short description:** Anonymous coding-focused model launched in stealth on Vercel AI Gateway 2026-09-25, free during preview. **The sole evidence of capability is one benchmark:** Vercel's Next.js Agent Evals where it passes 28/31 (90%) baseline → 30/31 (97%) with AGENTS.md — tying Claude Opus 5.5 and GPT-6 Astra on that specific harness. Identity unconfirmed (community fingerprint points at GLM family); **zero standard reasoning/coding benchmarks exist** (no GPQA/HLE/SWE-V/LCB/CritPt/AA Index). Seven days old at scoring time. Extraordinary promise, almost no evidence breadth.
- **Provider / access:** Vercel AI Gateway (OpenAI-compatible Chat Completions, `stealth/pixel-canary`); payment method required even at $0; Cline Desktop (free); AI SDK Playground; Command Code (Go plan+). Not on OpenRouter public catalog. No Zen ID.
- **Release / knowledge:** Stealth since 2026-09-25 (Vercel changelog). Knowledge cutoff undisclosed.
- **IDs:** `stealth/pixel-canary` (Vercel); `opencode/pixel_canary` (Zen catalog listing).
- **Context window:** **262,144 tokens total / 131,072 max output** (Vercel model catalog, per Kimi K3's direct listing check). Curated `meta.json` "128K" is a placeholder — superseded by the Vercel catalog spec.
- **Modalities:** **Text + image in; text out** per Vercel API capability (Kimi's catalog verification); reasoning yes (levels: none/low/medium/xhigh); tool calls yes; implicit caching yes. Muse notes image input "unverified — scored as text-only"; the Vercel API listing does enumerate image-input support, but zero vision benchmarks have been run.
- **Pricing (as of 2026-10-02):** **$0 / $0** during temporary stealth preview — **data caveat: provider may retain prompts and outputs for training** (Vercel listing). Post-preview pricing unknown. Cost excluded from Overall.
- **Architecture:** Undisclosed (stealth). Community fingerprint: reasoning style closest to GLM/MiniMax/Kimi/Qwen family, least like Gemini; Z.ai's GLM leading hypothesis — unconfirmed speculation.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (stealthmodels.com dossier + Vercel eval transcription, 2026-09-27) and `Muse_Spark_1.3.md` (Vercel AI Gateway page, next-evals-oss repo, newswire coverage, 2026-09-27). **Critical evidence gap:** this model has ONE measured result across all public trackers. Every other cell below says "no verified public score found" because the model is 7 days old and undisclosed.

Agent / tool use:

- Vercel Next.js Agent Evals (OpenCode harness, pass@4 with early exit, 40-min timeout): **28/31 (90%) baseline → 30/31 (97%) with AGENTS.md** — ties Opus 5.5 (high)/GPT-6 Astra (high)/Gemini 3.8 Flash at 97%; peer set on same harness: Grok 4.7 94%, Kimi K3 84%→97%
- Average evaluation duration: **16.9 min** per task (notably slow; frontier peers are 5–10 min)
- Terminal-Bench / Tau / GDPval / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Intelligence Index / Omniscience / MMLU-Pro: **no verified public score found** (stealth; no academic-suite runs published)

Coding:

- Next.js Agent Evals: see above — the only coding result in existence for this model
- SWE-bench / LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found**
- SVG generation: qualitative gallery (stealthmodels) — capable, unscored

Long context:

- 262K window verified by catalog; **zero retrieval benchmark data**

Multimodal:

- Image input listed as an API capability per Vercel catalog (Kimi); **no vision benchmark of any kind run**; Muse treats as text-only absent evidence.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. **Scoring philosophy for a one-data-point stealth model:** the Next.js eval is treated as genuine evidence for the narrow domain it tests (agentic web coding), and as weak circumstantial evidence for general coding/tool ability — but the complete absence of reasoning, breadth, retrieval, and multimodal data means those dimensions are scored at honest provisional floors rather than being borrowed from the suspected parent family (GLM-5.3 at 73) or the peer set's averages.

- **Tool use: 65/100.** The Next.js Agent Eval IS a real agentic tool-use test (OpenCode, file editing, terminal, test execution, 40-min timeout). 97% pass with docs guidance proves strong structured tool coordination within one framework. But it's the ONLY data point, pass@4 is generous, and zero standard agentic benchmarks (TB/GDPval/τ²/MCP) exist. Between Muse's 55 (too harsh for real eval evidence) and Kimi's 70 (slightly too generous for single-test evidence).
- **Reasoning: 60/100.** The eval implies non-trivial multi-step planning and code reasoning. But there is literally no GPQA, no HLE, no CritPt, no Omniscience — nothing to measure reasoning breadth, creativity, or honesty. Tying Opus 5.5 on a coding eval says "good at reasoning about Next.js code," not "frontier generalist reasoner." Provisional ceiling until academic benchmarks land. Kimi's 75 is optimistic; Muse's 60 is honest.
- **Context window: 70/100.** 262K / 131K out = 200K–500K band (65–84), scored at band floor given zero retrieval measurements. The Vercel catalog spec is authoritative over the curated 128K placeholder. No MRCR/RULER/LCR rows at all.
- **Multimodal: 45/100.** Image input supported per Vercel API capability listing (Kimi's direct verification) = enters the 60–70 band; but **zero vision benchmark evidence** of any kind (no MMMU, no Design Arena, no OCR) warrants a 15-point discount from the band floor. Muse's 15 (text-only) underweights the confirmed API input; Kimi's 62 (full band entry) overweights the absent quality evidence. 45 = "capability exists, quality unknown."
- **Coding: 75/100.** 30/31 (97%) on Vercel's Next.js Agent Eval is genuinely frontier-tying performance in a real software-engineering harness — the strongest single coding data point in this queue for a previously-unknown model. Scored below Kimi's 88 because: (a) pass@4 with early exit is lenient, (b) Next.js is one framework among dozens, (c) no SWE-V/LCB generalization evidence, (d) 16.9 min/task is slow. Scored above Muse's 72 because the eval is a legitimate agentic-coding benchmark, not a toy test.
- **Cost efficiency: 100/100.** $0/$0 during stealth preview = methodology floor 100. Flagged: temporary, and prompts/outputs may be retained for training. Cost excluded from Overall.
- **Overall Score: 63/100.** Mean of Tool 65, Reasoning 60, Context 70, Multimodal 45, Coding 75 = 315/5 = 63.0 → **63**. Best fit: **free-tier Next.js/front-end agentic coding during the preview window** — the 97% pass rate on a real harness is remarkable and suggests a genuinely capable model (likely GLM-family post-trained for web dev). But the evidence base is one test on one framework; until academic-suite benchmarks land, this is a promising dark horse, not a measured contender. Kimi K3's 73 borrows too much confidence from a single eval; Muse's 52 is too cautious given the eval IS real and agentic.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` (stealthmodels.com dossier, Vercel eval transcription, identity analysis) + `Muse_Spark_1.3.md` (Vercel AI Gateway page, next-evals-oss repo, newswire) + curated `meta.json` (128K and text-only corrected per Vercel catalog 262K and image-input). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **this entire report rests on ONE benchmark result** — the Next.js Agent Eval is real but insufficient for general scoring; (b) identity unconfirmed (likely GLM-5.4 per fingerprint, not verified); (c) the $0/$0 free preview carries a training-data-retention caveat; (d) 16.9 min/task latency is unusually slow.
- Revisit trigger: **mandatory when the model de-stealths** and a GPQA/HLE/SWE-V/LCB/AA Index panel becomes available; also if the Next.js eval is re-run at pass@1 with tighter timeout; or if the identity is confirmed (enabling architecture-informed scoring).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
