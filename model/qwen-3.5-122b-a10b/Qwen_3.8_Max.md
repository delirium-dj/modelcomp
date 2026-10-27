# Qwen 3.5 122B (A10B) — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.5-122b-a10b`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's **February-2026 open-weight multimodal agent MoE** — 122B total / **10B active** via a hybrid **Gated Delta Networks + sparse MoE (256 experts)** architecture, Apache 2.0. A native vision-language model (text + image + **video** in) built for "native multimodal agent applications," with a strong independent composite (**AA Intelligence Index 42, "well above average"**) and solid agentic/coding benchmarks (SWE-bench Verified 72.0%, TAU2-Bench 79.5%) at a low hosted price ($0.26–$0.29 in) or **$0 self-hosted**.
- **Provider / access:** Open-weight (Hugging Face `Qwen/Qwen3.5-122B-A10B`, Apache 2.0). Hosted on DeepInfra, Alibaba Cloud Model Studio, Novita, GMI, OpenRouter, SiliconFlow. **Not on OpenCode Zen**; **no free hosted tier** (`noFreeId: true`) — but self-hosting the Apache weights is free.
- **Release / knowledge:** Released **February 24, 2026** (Qwen3.5 family); current, **not deprecated**. Knowledge cutoff not published in the sources reviewed.
- **IDs:** `qwen/qwen3.5-122b-a10b`; HF `Qwen/Qwen3.5-122B-A10B`.
- **Context window:** **262,144 native, extensible to ~1,010,000 via YaRN**; **65,536 max output** (some providers cap output at 64K). The 1M is a YaRN extension, not the native trained window.
- **Modalities:** **Text, image, and video in → text out** (native multimodal, early-fusion VL foundation; confirmed by DeepInfra, NVIDIA NGC, and llm-stats). Reasoning: **thinking + non-thinking modes**. 201 languages/dialects.
- **Pricing (as of 2026-10-27):** Hosted **$0.26/$2.08** per 1M (OpenRouter/SiliconFlow, meta), **$0.29/$2.90** DeepInfra FP8 (blended $0.94 — cheapest tracked), **$0.40/$3.20** (Alibaba/Novita/GMI). **Self-host $0** (Apache 2.0). Very low cost for a 122B multimodal MoE.
- **Architecture:** Hybrid **Gated Delta Networks + sparse Mixture-of-Experts (256 experts, 10B active/token)**; unified early-fusion vision-language foundation; RL scaled across million-agent environments.

### Raw benchmarks found

> Independent anchor: **Artificial Analysis Intelligence Index = 42** (cited by DeepInfra's provider analysis; AA's own model page 404'd for the `qwen-3-5-122b-a10b` slug, so rank/unit-count are unavailable — the Index value itself is corroborated). Benchmark scores below are from the official Qwen scorecard/blog as re-reported by DeepInfra and llm-stats (vendor-adjacent, cross-consistent). No Vals SWE-bench row and no Epoch ECI entry were found for this exact model.

Independent / composite:

- **AA Intelligence Index: 42 — "well above average among comparable models."** For context, this is the same Index band as GLM-5.3-Flash (42, #6/121 open-weight) and just below the 753B GLM-5.3 flagship (45, #3/121) — a strong result for a **10B-active** open-weight MoE in the Medium (40–150B) size class.

Vendor / official scorecard (as re-reported by DeepInfra & llm-stats):

- **MMLU-Pro: 86.1%**; **GPQA Diamond: 85.5%** (vs GPT-5-mini 82.8%).
- **SWE-bench Verified: 72.0%**; **Terminal-Bench 2.0: 49.4%**.
- **TAU2-Bench: 79.5%** (agentic tool use; vs GPT-5-mini 69.8%); **BrowseComp: 63.8%** (web-agent).
- Serving: DeepInfra FP8 **155.5 tok/s**, **0.59s TTFT** (#1 of 4 providers); Function Calling on all providers, JSON mode on 3 of 4.

> Provenance: **AA Index 42** is the independent signal (well above average for its class); MMLU-Pro/GPQA/SWE-Verified/Terminal-Bench/TAU2/BrowseComp are from the **official Qwen scorecard** as re-reported by DeepInfra (a hosting provider) and llm-stats — vendor-adjacent but cross-consistent, and the AA Index corroborates the overall strength. No neutral SWE-bench harness (Vals/swebench.com) row was located for this exact model, so coding leans on the vendor 72.0%.
> Meta verification: mostly accurate — Apache 2.0 open-weight ✓, **122B/10B MoE** ✓, **text+image+video in** ✓ (DeepInfra/NGC confirm video), 262K native → ~1M YaRN ✓, 65K max out ✓, thinking/non-thinking ✓, "not on Zen" ✓, $0.26/$2.08 hosted + $0 self-host ✓. **One flag:** the curated short says **GPQA 86.6%**, but the corroborated figure is **GPQA Diamond 85.5%** — a small discrepancy (possibly a different GPQA slice); documented, not inherited. SWE-bench Verified 72.0% ✓ and Terminal-Bench 2.0 49.4% ✓ both match.

### Normalized scores (1–100)

- **Tool use: 83/100.** Genuinely agentic: **TAU2-Bench 79.5%** (beats GPT-5-mini's 69.8%), **BrowseComp 63.8%** (web-agent), Function Calling on every tracked provider, and a design explicitly aimed at "native multimodal agent applications" with RL across million-agent environments. Held just below the top agentic band because Terminal-Bench 2.0 (49.4%) is middling and there's no neutral agent-harness crown.
- **Reasoning: 82/100.** **AA Intelligence Index 42 ("well above average")** is a solid independent composite — the GLM-5.3-Flash band and near the 753B GLM-5.3 flagship — reinforced by **GPQA Diamond 85.5%** and **MMLU-Pro 86.1%**. Strong open-weight reasoning for a 10B-active model, short of the frontier-record tier.
- **Context window: 78/100.** **262K native** (the 256K band) — ample and proven; the ~1M is a **YaRN extension**, not the native trained window, so it isn't credited at the 1M tier. 65K max output is generous.
- **Multimodal: 83/100.** A **dedicated native vision-language model** (early fusion; "outperforms Qwen3-VL across … visual understanding") accepting **text + image + video** in. Text-only output keeps it below the any-non-text-out tier, but native-video VL input is a real, verified strength.
- **Coding: 79/100.** **SWE-bench Verified 72.0%** and **Terminal-Bench 2.0 49.4%** are solid but mid-pack versus current leaders (SWE-Verified 95%+); the figures are vendor/scorecard-reported with **no neutral Vals/swebench.com row** to independently confirm them, so this sits at the strong-published tier rather than elite.
- **Cost efficiency: 91/100.** Exceptional value — **Apache 2.0 self-host $0**, hosted from **$0.26–$0.29/$2.08–$2.90** (DeepInfra blended $0.94, cheapest tracked) with fast 155 tok/s serving. Only the ~122B self-hosting hardware requirement tempers it. Not counted toward Overall.
- **Overall Score: 81/100.** Mean of Tool 83 + Reasoning 82 + Context 78 + Multimodal 83 + Coding 79 = 405 / 5 = 81.0 → 81. Best fit: a **cheap, open-weight, native-multimodal agent MoE** — strong independent composite (AA 42), image+video input, good agentic (TAU2 79.5%) and coding (SWE-Verified 72%) numbers, Apache 2.0 self-hosting — ideal for cost-sensitive multimodal agent work where you can host or use a budget provider; reach for a 753B flagship (GLM-5.3) or a proprietary frontier model when you need elite coding/reasoning. **Divergence note:** curated queue 78.6 vs my 81 → **+2.4**. The positive gap is driven by the **native-multimodal (image+video) capability** (Multimodal 83) and the **strong AA Index 42 + TAU2/GPQA/MMLU-Pro** evidence, which I read as more capable than the curated 78.6 reflects; the curated score likely weights the mid-pack Terminal-Bench/SWE coding and the YaRN-only 1M extension more heavily. Unlike text-only open-weight peers (e.g. glm-5.3 at 78, dragged by Multimodal 50), this model's verified video-VL input lifts the mean.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (DeepInfra provider/benchmark analysis citing the AA Intelligence Index 42 and official Qwen scorecard; llm-stats.com specs/pricing/release date; NVIDIA NGC and vLLM-recipes model cards; Qwen3.5 blog for architecture; Artificial Analysis `qwen-3-5-122b-a10b` page 404'd so rank/units unavailable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
