# Gemini 2.5 Pro — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** **Google DeepMind's flagship "thinking" model of the 2.5 generation** — the release that **normalized controllable extended-thinking reasoning** across the industry and, at its **GA on 2025-06-05**, was a genuine **top-3 frontier model** (Epoch AI ranked it **#3 of 134** at launch). Its durable strengths were **best-in-class breadth** — **1M-token context** and the **widest input-modality set of any model I have scored (text + image + audio/speech + video + PDF in → text out)** — plus dependable long-context reasoning. But it is now **thoroughly superseded** (Gemini 3 arrived 2025-11-18 and "significantly outperforms 2.5 Pro on every major benchmark"; Artificial Analysis marks the model **deprecated**). The current independent evidence is decidedly mid-tier: **Epoch AI ECI 145, rank #90 of 253** (down from #3/134 at launch), **AA Intelligence Index ≈15 (estimated, v4.3.2), rank #303/698**, and — most tellingly — a **weak long-horizon agentic profile** on the neutral **Vals AI SWE-bench Verified** ruler (**73 / 48 / 14 / 0** by difficulty band, i.e. **0% on >4-hour tasks**), **ARC-AGI-2 5% (very weak)**, **METR time-horizons ≈38 min 44 s (short)**, and **GDPval 23%**. It remains a reasonable **migration/compatibility** choice and a strong **video + long-context multimodal** reasoner for its price, but it is no longer where the frontier is.
- **Provider / access:** **Google DeepMind.** Served via the **Gemini API** (`gemini-2.5-pro`), Google AI Studio / Vertex AI, and resold by OpenCode as `opencode/gemini-2.5-pro`. **Proprietary / closed-weights** — Google has not disclosed the parameter count. **No free-id tier** in this dataset (`noFreeId: true`). AA marks the entry **deprecated** and only continues benchmarking the default 10k-input workload; the rest is historical.
- **Release / knowledge:** **Preview 2025-03-25**, further previews through May, **GA 2025-06-05**. **Knowledge cutoff January 2025.** Superseded by **Gemini 3 (2025-11-18)** and the 3.x line; the model now "serves migration compatibility."
- **IDs:** `gemini-2.5-pro` (Gemini API GA) / `gemini-2-5-pro-03-25` (AA's deprecated Mar-preview page) / `opencode/gemini-2.5-pro` (this dataset).
- **Context window:** **1,048,576 (1M) tokens; ~64K output** — confirmed by both AA and Epoch. The 1M window with dependable retrieval was a headline strength ("~1,500 A4 pages"); long-context reasoning was the model's signature capability at launch.
- **Modalities:** **Text, image, audio/speech, video, and PDF in → text out.** This is the **broadest input-modality set** in the dataset — native **video** and **audio/speech** understanding alongside images and documents (AA: "supports text, image, speech, and video input, outputs text"). Output is text-only.
- **Pricing (as of 2026-10-24):** **$1.25 input / $10.00 output per 1M tokens for prompts ≤200K; $2.50 / $15.00 above 200K** (Epoch corroborates the $1.25/$10 base tier). Reasoning/thinking tokens are billed as output. Mid-tier for a 1M-context multimodal flagship, but **proprietary with no open-weight/free-self-host escape hatch**, and Gemini 3.x now offers more intelligence at similar prices — so the value case has eroded.
- **Architecture:** **Proprietary; parameter count and internals not disclosed by Google.** A **reasoning model** with a **controllable thinking budget** (dynamic or user-set), which was the generation-defining feature. MoE details, if any, are unpublished.

### Raw benchmarks found

Two independent houses have current numbers, and both confirm supersession. **Epoch AI** (independent, GA June-2025 checkpoint) and **Artificial Analysis** (independent; the fetched page is the **deprecated Mar'25 preview**, so its Index is an *estimate*), plus the neutral **Vals AI** coding ruler.

**Epoch AI — Estimated Composite Intelligence (ECI) and benchmark table (independent):**

- **ECI 145; rank #90 of 253 tracked models** — was **#3 of 134 at launch**; a ~87-place slide as the frontier advanced
- **GPQA Diamond: 85%** (corroborates the meta's 84.4%)
- **OTIS Mock AIME: 84%** (the meta's "AIME 92%" is **Google's own** headline figure on a different AIME set; Epoch's independent mock-AIME is 84%)
- **SWE-bench Verified: 58%** (independent; respectable at mid-2025 launch, now well below frontier — Claude Opus 5 ≈97%)
- **HLE (Humanity's Last Exam): 22%** · **FrontierMath T1–3 (v2): 25%**
- **ARC-AGI-1: 41%** · **ARC-AGI-2: 5% (very weak)**
- **GDPval: 23%** · **METR time-horizons: ≈38 min 44 s (short)**
- Pricing confirmed at **$1.25 / $10** per 1M

**Artificial Analysis — Intelligence Index (independent; deprecated Mar'25-preview page):**

- **AA Intelligence Index ≈15 (estimated) on the v4.3.2 basket; rank #303/698**, flagged **"above average" (median 12)** — the whole basket has rebased upward, so a low-teens Index now sits only marginally above the median
- Confirms **1M context, Jan-2025 cutoff, text+image+speech+video in / text out, reasoning model, proprietary**; **"This model is deprecated… Google has launched a newer release"**

**Vals AI SWE-bench Verified (independent, bash-tool-only neutral harness):**

- **Gemini 2.5 Pro: 73 / 48 / 14 / 0** by difficulty band (<15 min / 15 m–1 h / 1–4 hr / >4 hr) — a **steep long-horizon collapse** (0% on >4-hour tasks), and even its <15-min band (73) trails current frontier models by ~20+ points. For scale on the same ruler: Claude Opus 5 = 98/97/90/100, GPT-5.6 Sol = 97/95/98/100, and even the mid-tier Qwen 3.5 Plus = 85/68/36/0 beats it at the top band.

> Provenance: Unlike most launch-table models, Gemini 2.5 Pro has **genuine independent benchmarking from two houses (Epoch AI and Artificial Analysis) plus the neutral Vals AI coding ruler** — so its scores are *verified*, not vendor-attested. The verdict is consistent across all three: a **once-frontier model, now thoroughly superseded and mid-tier**. The scaffolded meta.json was **verified rather than inherited**, and it is largely **accurate**: 1M/64K context ✓ (AA + Epoch), text+image+audio+video+PDF modalities ✓ (AA), $1.25/$10 (≤200K) / $2.50/$15 (>200K) pricing ✓ (Epoch), GPQA 84.4% ✓ (Epoch GPQA Diamond 85%), and "superseded by 3.x" ✓ (AA deprecated + Gemini 3 launch). **One nuance flagged, not an error:** the meta leads with **"AIME 92%"** — that is **Google's own** figure; Epoch's independent **OTIS Mock AIME is 84%**. Both are reported here. The meta's framing ("dependable long-context reasoning… the template Google's 3.x line refined") is fair for *launch-era* stature but understates how far the model has fallen on current independent evidence (Epoch rank #3/134 → #90/253; Vals long-horizon 0% at >4 hr; ARC-AGI-2 5%). **No benchmark was invented.**

### Normalized scores (1–100)

- **Tool use: 73/100.** Weak by current standards on every independent agentic ruler: **Vals 73/48/14/0** (a **0% >4-hour** long-horizon collapse), **METR time-horizons ≈38 min** (short), **GDPval 23%**, and AA's deprecated status. It had competent function-calling at launch, but held **well below Kimi K2.6 (83, AA Index 54)** and Inkling (84) — Kimi's Vals top band (88) already beats Gemini 2.5 Pro's (73), and Kimi/Inkling have *current* verified agentic marks. Scored at the low end of the functional-but-superseded tier.
- **Reasoning: 79/100.** Genuinely strong *for its launch window* and still respectable on knowledge-heavy sets — **GPQA Diamond 85%**, **AIME 92% (Google) / OTIS Mock AIME 84% (Epoch)** — and it was **the model that normalized controllable thinking**. But the hard-reasoning frontier marks are weak: **ARC-AGI-2 5% (very weak)**, **ARC-AGI-1 41%**, **HLE 22%**, **FrontierMath 25%**, and **Epoch ECI rank #90/253** (from #3/134). Scored **below Kimi K2.6 (85) and Inkling's peer set** but above the purely image/agent-tier models — solid GPQA/AIME keep it from falling further.
- **Context window: 85/100.** **1M native / ~64K output**, independently confirmed by both AA and Epoch, with dependable long-context retrieval that was a signature launch strength ("~1,500 A4 pages"). Frontier-class 1M-club membership (alongside MiniMax M3, Qwen3.6-Plus, Inkling weights, deepseek-v4-vision-exp) — scored level with those at 85. (The weak Vals long-*horizon* result reflects multi-step agentic endurance, not raw context capacity, so it does not penalize this dimension.)
- **Multimodal: 82/100.** The **broadest input-modality set of any model in this dataset — text + image + audio/speech + video + PDF**, with native video and audio understanding that led the field at launch. Breadth is unmatched (wider than Inkling's text+image+audio and Kimi's text+image+video, both scored 79–82). Held at 82 rather than higher because the multimodal *quality* is now dated/superseded (Gemini 3.x leads current video+audio benchmarks) and no current independent multimodal score was retrievable — breadth carries it, not verified present-day leadership.
- **Coding: 75/100.** **SWE-bench Verified 58% (Epoch, independent)** was competitive at mid-2025 but is now far below frontier (Opus 5 ≈97%), and the neutral **Vals row 73/48/14/0** shows a steep collapse on longer tasks (0% at >4 hr, 14% at 1–4 hr) with even the <15-min band (73) trailing current mid-tier models. Scored **well below Kimi K2.6 / GPT-5.2 (85)** and below deepseek-v4-vision-exp (84) — the independent evidence here is verified and clearly mid-pack-to-weak.
- **Cost efficiency: 72/100.** **$1.25/$10 (≤200K), $2.50/$15 (>200K)** — mid-tier for a 1M multimodal flagship, but **proprietary with no open-weight self-host path and no free-id tier**, while Gemini 3.x delivers more intelligence at similar prices and open-weight rivals (DeepSeek MIT, Inkling Apache-2.0) are far cheaper to run. Scored **below the open-weight cost leaders (Inkling/deepseek-v4-vision-exp 92)** — you pay frontier-adjacent prices for superseded intelligence. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 79/100.** Mean of Tool 73 + Reasoning 79 + Context 85 + Multimodal 82 + Coding 75 = 394/5 = 78.8 → 79. Best fit today: **migration/compatibility workloads already built on the 2.5 API**, and **video + long-context multimodal reasoning** where its unmatched 5-modality input breadth and 1M window still earn their keep at a mid-tier price. **Not** the pick for frontier agentic/coding work (Vals long-horizon 0% at >4 hr, ARC-AGI-2 5%, METR ≈38 min), for cost-sensitive teams (proprietary, no self-host, superseded by 3.x at similar prices), or for anyone who can simply move to Gemini 3.x. **Divergence note:** my 79 is **6.2 below the queue's curated 85.2 — the largest gap in this batch**, and it is fully explained by *timing*: the 85.2 reflects the model's **launch-era (mid-2025) frontier stature** (Epoch #3/134, "the first mainstream thinking model"), whereas my score is graded on **current independent evidence** — Epoch rank has fallen to **#90/253**, AA marks it **deprecated (Index ≈15, #303/698)**, and the neutral Vals ruler shows a **long-horizon coding collapse (73/48/14/0)**. Every one of those is independently verified, not vendor-attested, which is why I weight them heavily and land well below the curated launch-reputation score.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-24
- Method: public internet research (Epoch AI model page for the GA June-2025 checkpoint — ECI 145/rank #90-of-253 and the independent benchmark table; Artificial Analysis for the deprecated Mar'25-preview Intelligence Index and modality/context/cutoff confirmation; the neutral Vals AI SWE-bench Verified leaderboard; Google DeepMind release/pricing pages); scores are normalized 1–100 interpretations, not official vendor scores. For this model the key numbers are **independently verified** (Epoch + AA + Vals), and they consistently show a once-frontier model now thoroughly superseded.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
