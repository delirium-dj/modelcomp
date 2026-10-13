# Qwen3.5 — findings by GLM 5.3

- Source: Alibaba Qwen (`qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-03 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 (the generation's open-weights mid-flagship: Qwen3.5-122B-A10B)
- **Short description:** Alibaba Qwen's Apache-2.0 multimodal model of the Qwen3.5 generation — a 122B-total / 10B-active MoE with a Gated DeltaNet hybrid layout ("122B total but costs like a 10B model" — curateclick), released **2026-02-24** in the family's "Medium Series" wave (the 397B-A17B flagship landed 2026-02-16; techie007's three-wave guide). Second pass brings the first independent measurement — and it lands far below the vendor table (AA II 17.8 #249, Omniscience −41.5, τ³ 15.3%, GDPval 15.7%) — while resolving pricing (**$0.26/$2.08 floor, max output = the full 262K window**). Top use case: cheap self-host multimodal + tool work where frontier intelligence isn't required.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-122B-A10B` (+ FP8; gated `Qwen/Qwen3.5` repo); OpenRouter — 4 providers, **Alibaba Cloud Int./SiliconFlow $0.26/$2.08**, AtlasCloud $0.30/$2.40 (fp8), NovitaAI $0.40/$3.20 (bf16); Alibaba Cloud Model Studio; self-host via vLLM/SGLang/KTransformers. Not on OpenCode Zen (Zen carries the Plus tier instead).
- **Release / knowledge:** **2026-02-24** (BenchLeader + techie007's wave guide; the first pass's "March 2026" was the HF-repo update window); knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF/vLLM/SGLang), `Qwen3.5-122B-A10B` (DashScope).
- **Context window:** **262,144 tokens native, max output 262,144** (OpenRouter — the full window is usable as output); extensible to 1.01M via YaRN (config, not native).
- **Modalities:** text, image, and video in; text out; thinking mode (`enable_thinking` — the thinking config beats no-reasoning on nearly every AA row); native tool calls + MCP; multi-token prediction; 201 languages.
- **Pricing (as of 2026-10-13):** **$0.26 in / $2.08 out per 1M** floor (4 OpenRouter providers; blended $1.10/M); Apache-2.0 self-host at $0; 82-143 tok/s depending on config.
- **Architecture:** 122B total / 10B activated MoE — 256 experts (8 routed + 1 shared), 48 layers in a 12 × (3 × Gated DeltaNet → MoE, 1 × Gated Attention → MoE) hybrid layout, integrated vision encoder, Apache-2.0.

### Raw benchmarks found

> Second pass adds the first independent rows (BenchLeader: best = not-stated **54.5 #234/760**, last measured 2026-10-09; BenchLM: "does not yet have enough sourced coverage for a verified position" — #129/220 at 41.64). Category scores: **Maths 61 (best)**, Human preference 60, Reasoning 60, Multimodal 58, **Coding 46 (worst)**. The vendor table's headline claims mostly do not survive: AA II lands at **17.8 #249** vs the vendor-era impression of a near-frontier model.

Agent / tool use:

- **τ²-Bench: 93.6% #42 (thinking)** — the one vendor row that independent measurement *beat* (vendor claimed 79.5%); no-reasoning reads 84.5% #101
- **τ³-Banking: 15.3% #114 (thinking) / 10.3% #139** — gap filled; dreadful
- **GDPval-AA: 15.7% #178 (thinking) / 10.4% #190** — gap filled; bottom-tier remote-labor
- Terminal-Bench 2.1 (AA): **47.6% #119 (thinking) / 47.2% #120** (consistent with the vendor's TB2 49.4%); TB Hard 29.6-31.1% #107-117 (weak); **TB 4.0 (AA): 0.0% #146**
- Vendor rows retained: BFCL-V4 72.2%, OSWorld-Verified 58.0%, AndroidWorld 66.4%, ScreenSpot Pro 70.4%, TIR-Bench 53.2; GDPval/Claw/Toolathlon gaps now filled (above) or still unmeasured

Reasoning / knowledge:

- GPQA Diamond (AA): **85.7% #117 (thinking)** / 82.7% #165 — below the 90% bar (vendor claimed 86.6%)
- HLE (AA): **25.2% #175 (thinking)** / 15.9% #235 — well below the 40% reference (the vendor's 47.5%-with-tools row stands apart); **CritPt: 0.6-0.9% #226-243** (dreadful)
- **Honesty is the severe weakness: AA-Omniscience index −41.5 (thinking) / −55.0 (no-reasoning); non-hallucination 8.4-12.9% #358-450; accuracy 19.1-24.4% #234-304** — among the worst knowledge-reliability profiles measured this cycle
- **AA Intelligence Index: 17.8 #249 (no-reasoning) / 15.6 #267 (thinking)** — very weak composite; DTBench 84.3% #92; LMCA 32.2% #112; Mystery Game 17.0% #72
- Vendor rows retained with reduced confidence: HMMT Feb 25 91.4% / Nov 25 90.3%, MMLU-Pro 86.7%, MMLU-Redux 94.0%, SuperGPQA 67.1% — the knowledge claims conflict with the measured Omniscience collapse (flagged)
- **IFBench: 75.7% #27 (thinking)** — good; Maths 61 is its best category

Coding:

- Vendor rows retained: SWE-bench Verified 72.0%, LiveCodeBench v6 78.9%, CodeForces 2100 — **no independent SWE-V/LCB row exists yet**
- Independent rows are weak: **SciCode 35.6% #178 (Epoch) / 39.7% #169 (AA)** — far below the 55% reference; **TB 4.0 0.0% #146**; LMArena Coding 1459 #130 / WebDev 1360 #98; Coding 46 is its worst BenchLeader category

Long context:

- 262,144 native (max output = full window — unusually generous); **AA-LCR: 76.3% #139 (thinking)** — better than the vendor's 66.9%; LongBench v2 60.2% (vendor); no MRCR/RULER at the YaRN 1.01M extension.

Multimodal:

- **MMMU-Pro (AA): 75.0% #101 (thinking) / 70.3% #141**; LMArena Vision 1245 #68 — the vendor vision table (MMMU 83.9, MathVision 86.2, OCRBench 92.1, VlmsAreBlind 96.7, VideoMME 87.3) remains vendor-only; text+image+video in, text out.

### Normalized scores (1–100)

- **Tool use: 58/100.** Lowered from 75: the gaps filled in dreadful — τ³ 15.3% #114, GDPval 15.7% #178, TB 4.0 0.0%, TB Hard ~30% — offset by the genuinely elite τ² 93.6% #42 (thinking), IFBench 75.7% #27, mid TB 2.1 47.6%, and the solid vendor computer-use rows (OSWorld 58%, AndroidWorld 66.4%).
- **Reasoning: 62/100.** Lowered from 82: GPQA 85.7% #117 sits below the bar, HLE 25.2%, CritPt 0.6%, AA II 17.8 #249, and the catastrophic honesty (Omniscience −41.5, non-hall 8.4-12.9%) contradict the vendor's strong knowledge claims — offset by DTBench 84.3% #92, vendor HMMT ~91%, and Maths 61 as best category.
- **Context window: 74/100.** Raised from 72: 262K confirmed with the full window usable as output, and measured retrieval improved to AA-LCR 76.3% #139 at thinking.
- **Multimodal: 76/100.** Lowered from 88: the independent rows (MMMU-Pro 70-75% #101-141, Vision 1245 #68) are mid; the strong vendor vision table is unverified elsewhere — text+image+video input keeps it in the omni band.
- **Coding: 56/100.** Lowered from 74: independent coverage is thin but uniformly weak — SciCode 35.6-39.7%, TB 4.0 0.0%, Coding 46 (worst category), weak LMArena coding preference — while the decent SWE-V 72.0% / LCB 78.9% remain vendor-only.
- **Cost efficiency: 88/100.** Raised from 85: pricing resolved at the **$0.26/$2.08 floor** with 10B active parameters and Apache-2.0 self-host — outstanding per-token economics for the measured capability.
- **Overall Score: 65/100.** (58 + 62 + 74 + 76 + 56) / 5 = 65.2 → 65, down from 78 — the vendor table did not survive the first independent measurement. Best-fit: a very cheap, very fast Apache-2.0 self-host omni model with elite τ² tool-calling at thinking — but its knowledge reliability is among the worst measured (never trust it unverified), its 2026 agent and coding suites are bottom-tier, and the 397B flagship or Qwen3.6+ siblings are better open-weights picks for serious work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-03 report (BenchLeader profile as of 2026-10-09 — Artificial Analysis own-harness rows across no-reasoning/thinking configs, Epoch AI Benchmarking Hub, LiveBench, LMArena; OpenRouter provider listings resolving the per-token price unknown and the 262K max-output fact; DDG-lite searches surfacing BenchLM's thin-coverage caveat, techie007's three-wave release guide fixing 2026-02-24, curateclick's cost framing, and llm-stats' comparison rows; the first-pass vendor model-card table retained with reduced confidence where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
