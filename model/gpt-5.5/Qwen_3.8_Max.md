# GPT-5.5 — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was a launch-week blend of OpenAI's vendor table and early AA numbers, and it scored generously on the strength of claims the independent pass now walks back. **(1) The "natively omnimodal (text/image/audio/video)" headline is not verified by AA** — the spec table for `gpt-5-5` lists **input = text + image only** (context **922k**, not 1M). This is the same correction applied to its sibling GPT-5.5 Pro (#15), so **Multimodal 90 → 85** (the surviving *image* evidence is genuinely strong — **ExtractBench 93.57 / AA-MMMU-Pro 79.9** — so the drop is for the removed audio/video path, not a weak vision core). **(2) The "#1 independent AA Intelligence Index (60.2 of 147)" is launch-vintage v4.x and no longer holds:** the id is **DEPRECATED** (GPT-5.6 Sol superseded it), the v5.0 composite reads N/A, and the current Index surfaced via BenchLM is **38.4** — only just above the ~37 median, not a summit. **(3) A faithfulness ceiling the draft never measured:** **AA-Omniscience hallucination is 89.0%** (accuracy 58.0, Index 20.5) — near the worst-in-dataset tier (cf. Gemini 3 Pro's 91.5% cap in this same batch). Absolute reasoning is still genuinely strong on neutral instruments — **AA-GPQA 93.5 / Vals 93.2**, **Epoch FrontierMath v2 T4 72.5 / T1–3 85.3**, **ARC-AGI-1 95.0** (ARC Prize), **AA-LCR 84.3** — so Reasoning falls **90 → 87** (−3: the dethroned Index plus the 89% hallucination cap, offset by strong independent math/GPQA), not further. **Tool 89 → 86:** the launch agentic set was almost all OpenAI-run; the neutral read is mid-pack (**AA Agentic Index 37.3**, GDPval-AA 1396, **OSWorld 2.0 on the harder new version 13.0**) even though **AA Terminal-Bench 2.1 84.3** and Vals SWE-bench 82.6 corroborate terminal/coding execution. **Context holds 93** (MRCR 94.8/74.0 is independently echoed by **AA-LCR 84.3**; the 922k-vs-1M card correction is immaterial to the score). **Coding holds 89** (**Vals SWE-bench 82.6**, AA Coding Index 74.9, LiveCodeBench (Vals) 85.3). **Cost holds 50** ($5/$30, AA expensive vs $2/$10). **Overall 90 → 88** — a launch-honeymoon recalibration: the model itself is unchanged, but v5.0 de-throned its Index, AA trimmed its modality claim, and independent coverage exposed an 89% hallucination ceiling the April table could not see. Sibling GPT-5.5 Pro / GPT-6 rows on the BenchLM page are context only, never transferred.

## Model card

- **Name:** GPT-5.5 (development codename **"Spud"**)
- **Short description:** OpenAI's April-2026 flagship and the **first fully retrained base model since GPT-4.5** (the 5.1–5.4 releases were incremental refinements on one base). Natively omnimodal — text, images, audio and video processed end-to-end in a single unified system — and the first OpenAI API model with a 1M-token context window (4x GPT-5.4's 256K). Explicitly positioned as an **agent** that takes a sequence of actions, uses tools, checks its own work and continues until a task finishes, rather than a turn-by-turn assistant. It topped the independent Artificial Analysis Intelligence Index at launch.
- **Provider / access:** ChatGPT (Plus / Pro / Business / Enterprise) and Codex; API in the Responses and Chat Completions endpoints (rolled out shortly after launch). Three variants: **GPT-5.5** (general), **GPT-5.5 Thinking** (extended chain-of-thought), **GPT-5.5 Pro** (highest accuracy, Pro/Business/Enterprise).
- **Release / knowledge:** Released 2026-04-23 (API/OpenRouter listing 2026-04-24); knowledge cutoff **December 2025**. Shipped ~6 weeks after GPT-5.4.
- **IDs:** `openai/gpt-5.5` (variants `gpt-5.5-thinking`, `gpt-5.5-pro`).
- **Context window:** 1,000,000 tokens (1.1M per OpenRouter) in the API; **400,000 tokens in Codex**. **AA measures 922k (corrected 2026-11-02)** — the marketing 1M is rounded up.
- **Modalities:** text + image in → text out (**AA's authoritative spec table lists text + image only — the launch "natively omnimodal audio + video" API claim is not verified and is corrected 2026-11-02, matching the GPT-5.5 Pro sibling**); reasoning yes (Thinking variant / effort levels incl. xhigh); tool calls yes (built for multi-step agentic tool use and self-checking).
- **Pricing (as of 2026-10-21):** $5 input / $30 output per 1M tokens — **double** GPT-5.4's $2.50/$15 (OpenAI's largest single-release price increase). **GPT-5.5 Pro: $30 / $180.** OpenAI notes it is more token-efficient than GPT-5.4, partly offsetting the higher rate.
- **Architecture:** Undisclosed proprietary; unified new-retrain model (OpenAI markets it as omnimodal, but the API surface AA tracks is text + image — see Modalities); not an incremental 5.x refinement.

### Raw benchmarks found

Agent / tool use (OpenAI vendor-run + independent AA):

- Terminal-Bench 2.0: **82.7%** (2.1: **78.2%**) — leads its tables (Gemini 3.5 Flash 76.2%, Opus 4.7 66.1–69.4%)
- OSWorld-Verified (GUI computer use): **78.7%** — leads (Opus 4.7 78.0%, Gemini 3.5 Flash 78.4%)
- GDPval: **84.9%**; GDPval-AA Elo **1769** — leads (Opus 4.7 1753, Gemini 3.5 Flash 1656)
- Tau2-bench Telecom: **98.0%** without prompt tuning
- MCP Atlas: **75.3%** — a relative **weak spot** (trails Opus 4.7 79.1%, Gemini 3.1 Pro 78.2%); Toolathlon 55.6%, Finance Agent v2 51.8% (below Gemini 3.5 Flash 57.9%)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (independent): 60.2 (xhigh)** — **#1 of 147**, ~3 points ahead of Claude Opus 4.7 (57.3) and Gemini 3.1 Pro Preview (57.2); OpenAI claims SOTA across 14 benchmarks — **launch-vintage (v4.x); the id is now DEPRECATED (GPT-5.6 Sol superseded it), the v5.0 composite reads N/A, and the current Index via BenchLM is 38.4 (just above the ~37 median, no longer #1).**
- **Independent faithfulness (added 2026-11-02):** **AA-Omniscience hallucination 89.0% / accuracy 58.0 / Index 20.5** — a near-worst-in-dataset ceiling the launch draft had no measurement for; caps Reasoning. **AA-GPQA 93.5 / Vals 93.2** corroborate GPQA; **AA-HLE 45.8** (mid).
- GPQA Diamond: **93.6%** — frontier cluster, a touch below Gemini 3.1 Pro (94.3%) and Opus 4.7 (94.2%)
- ARC-AGI-2: **84.6–85.0%** — leads (Opus 4.7 75.8%, Gemini 3.1 Pro 77.1%, Gemini 3.5 Flash 72.1%)
- FrontierMath: **51.7%** (T1–3) / **35.4%** (T4); CyberGym **81.8%**; GeneBench 25.0%; BixBench 80.5%
- Humanity's Last Exam (no tools): **41.4%** — **trails** Opus 4.7 (46.9%) and Gemini 3.1 Pro (44.4%); pure knowledge/academic recall is the gap that has not fully closed

Coding:

- Expert-SWE: **73.1%** (up from 68.5% prior gen)
- SWE-Bench Pro: **58.6%** — **trails Claude Opus 4.7 (64.3%)**; ahead of Gemini 3.1 Pro (54.2%) and Gemini 3.5 Flash (55.1%)
- Terminal-Bench 2.0 82.7% (above) is the coding headline; strong agentic/terminal work, behind Anthropic on the hardest repository engineering

Multimodal:

- MMMU-Pro: **83.2%** with tools / **81.2%** no tools; CharXiv Reasoning (no tools): **84.1%**; Blueprint-Bench 2 (normalized): **36.2%** — leads (Gemini 3.5 Flash 33.6%)
- Native text+image+audio+video understanding in one model

Long context:

- MRCR v2 (8-needle, 128k): **94.8%** — best-in-class by a wide margin (Gemini 3.1 Pro 84.9%, Gemini 3.5 Flash 77.3%, Opus 4.7 59.3%)
- MRCR v2 (512K–1M): **74.0%** — leads (GPT-5.4 36.6%, Opus 4.7 32.2%); 1M window (400K in Codex)

> Provenance: benchmark figures combine **OpenAI's vendor-run launch table** (via Vellum and DataNorth, "SOTA across 14 benchmarks") with **independent** Artificial Analysis measurements (Intelligence Index 60.2 xhigh = #1/147; ~65 tok/s at xhigh; ~75M output tokens for the full Index; ~$3,357 eval cost). The April-2026 picture is explicitly non-dominated: GPT-5.5 leads agentic/tool-use and long-context retrieval, Claude Opus 4.7 leads SWE-Bench Pro, MCP Atlas, HLE (no tools) and Finance Agent v1.1, and Gemini 3.1 Pro leads abstract reasoning (ARC-AGI-1) and edges GPQA Diamond. HLE (41.4) and MCP Atlas (75.3) are GPT-5.5's documented relative weaknesses; the $5/$30 rate is a premium (2x GPT-5.4).

### Normalized scores (1–100)

- **Tool use: 86/100.** *(89 → 86 — vendor-heavy read corrected.)* Built ground-up for multi-step tool use and strong on terminal execution (**AA Terminal-Bench 2.1 84.3**, Vals SWE-bench 82.6, OSWorld-Verified 78.7 vendor), but the neutral agentic picture is mid-pack, not leading: **AA Agentic Index 37.3**, GDPval-AA (AA) 1396, and **OSWorld 2.0 on the harder new version is 13.0**. The launch "leads its tables" framing was OpenAI-run.
- **Reasoning: 87/100.** *(90 → 87 — Index dethroned + faithfulness ceiling found.)* Absolute reasoning is strong on neutral instruments — **AA-GPQA 93.5 / Vals 93.2**, **Epoch FrontierMath v2 T4 72.5 / T1–3 85.3**, **ARC-AGI-1 95.0 (ARC Prize)** — but two independent findings cut the launch read: the AA Intelligence Index is no longer #1 (deprecated; v5.0 38.4, barely above median), and **AA-Omniscience hallucination is 89.0%** (accuracy 58.0) — a near-worst-in-dataset honesty ceiling the draft never measured. Mid **AA-HLE 45.8** and weak **ARC-AGI-3 0.4** reinforce the cap.
- **Context window: 93/100.** A genuine ~1M-class API window (AA measures **922k**) with **best-in-class retrieval** — MRCR v2 94.8% at 128k and 74.0% at 512K–1M, far ahead of every rival and independently echoed by **AA-LCR 84.3**; discounted only by the 400K Codex cap.
- **Multimodal: 85/100.** *(90 → 85 — omnimodal claim corrected to text+image.)* AA's spec table lists **text + image only**, removing the audio/video path the draft credited (same correction as the GPT-5.5 Pro sibling). The *image* core is genuinely strong and independently measured: **ExtractBench 93.57 / ParseBench 62.27 (LlamaIndex)**, **AA-MMMU-Pro 79.9** (vendor 81.2/83.2), CharXiv 84.1, leading Blueprint-Bench 2 36.2. Held at 85 for the lost audio/video breadth, not weak vision.
- **Coding: 89/100.** Terminal-Bench 2.0 82.7% leads and Expert-SWE improved to 73.1%, with CyberGym 81.8% and strong agentic/terminal execution; held below 90 because SWE-Bench Pro (58.6%) trails Claude Opus 4.7 (64.3%) on the hardest multi-language repository engineering.
- **Cost efficiency: 50/100.** Premium — $5/$30 is double GPT-5.4 (OpenAI's biggest single-release hike) and GPT-5.5 Pro is $30/$180, with an AA full-Index eval cost of ~$3,357; OpenAI's claimed token-efficiency gains only partly offset the rate, so it is a poor fit for cost-constrained workloads despite the capability.
- **Overall Score: 88/100.** *(90 → 88.)* Mean of Tool 86 + Reasoning 87 + Context 93 + Multimodal 85 + Coding 89 = 440 / 5 = 88.0 → 88. A launch-honeymoon recalibration, not a capability regression: the model is unchanged, but v5.0 de-throned the "#1 Index 60.2" claim (now 38.4, deprecated), AA's spec trimmed the omnimodal headline to text+image (−5 Multimodal), and independent coverage surfaced an **89% hallucination** ceiling plus mid-pack agentic (−3 Tool). Context 93 (best-in-class MRCR, echoed by AA-LCR 84.3) and Coding 89 (Vals SWE-bench 82.6) survive intact. Best fit: autonomous long-horizon agentic work and 1M-class (922k) long-context retrieval at a premium ($5/$30, Cost 50); faithfulness-critical, cost-sensitive, and frontier computer-use/software-engineering tasks now favor the newer GPT-5.6 Sol / GPT-6 / Opus 5.5 generation.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21; re-researched 2026-11-02.
- Method: public internet research (OpenAI's vendor-run launch table via Vellum and DataNorth; independent Artificial Analysis Intelligence Index 60.2 = #1/147 and speed/verbosity/cost; cross-checked against Appwrite's Gemini 3.5 Flash comparison table, OpenRouter and ofox.ai for pricing/context); scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research sources (2026-11-02):** Artificial Analysis model page (`gpt-5-5` — **deprecated**, composite N/A, Speed 77.4 #110/196, text+image spec, 922k) and BenchLM (`gpt-5-5` — 68.82 #19/1004, 72 of 724) for AA-GPQA/AA-HLE/AA-LCR/Omniscience (89% hallucination), ARC Prize, Epoch FrontierMath v2, Vals and LlamaIndex cells.
- **Conflict handling:** independent governs. The launch "#1 Index 60.2" and "omnimodal" vendor framing are corrected to the current AA read (38.4, deprecated) and text+image spec; adverse independent findings (89% hallucination, AA Agentic 37.3, OSWorld 2.0 13.0) drive the Reasoning/Tool/MM reductions. Vendor rows (Terminal-Bench 2.0 82.7, GDPval 1769) retained alongside neutral counterparts, never averaged; GPQA where Vals/AA agree with vendor is accepted as corroboration.
- **Guards:** launch-vintage v4.x Index (60.2/#1) not treated as current; sibling GPT-5.5 Pro / successor GPT-5.6 Sol / GPT-6 rows kept as context only, never transferred onto GPT-5.5's cells; OSWorld-Verified (78.7) and OSWorld 2.0 (13.0) and Terminal-Bench 2.0/2.1 recorded as distinct harness versions, not merged.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
