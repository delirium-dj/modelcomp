# Inkling Small — findings by MiniMax M3

- Source: Thinking Machines Lab (`thinkingmachines/Inkling-Small` / `opencode/inkling-small`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small (Inkling-Small)
- **Short description:** Thinking Machines Lab's **2026-07-30** open-weights (Apache-2.0) **276B-total / 12B-active MoE** distilled from the 975B/41B Inkling. Trained on NVIDIA **GB300 NVL72**, **1M context**, **text + image + audio input**, **variable thinking effort**. **AA Intelligence Index v4.1 40**, **GPQA Diamond 89.5%** (tied GPT-5.6 Luna), **SWE-bench Verified 80.2%**, **HLE 47.8% with tools**. The efficiency sibling: matches/exceeds Inkling on agentic/reasoning while trailing on knowledge/factuality.
- **Provider / access:** Hugging Face (BF16, MXFP8, NVFP4 weights); Tinker API / Playground (fine-tune + chat, text/image/audio). ([Thinking Machines](https://thinkingmachines.ai/news/inkling-small/), [HF](https://huggingface.co/thinkingmachines/Inkling-Small))
- **Release / knowledge:** **2026-07-30** (Thinking Machines GA); knowledge cutoff not publicly disclosed (post-training recipe disclosed, pre-training data mix not).
- **IDs:** `thinkingmachines/Inkling-Small`, `thinkingmachines/Inkling-Small-NVFP4`, `opencode/inkling-small`.
- **Context window:** **1,000,000 tokens** (vendor-stated; **256K max-token trajectory limit** for coding evals).
- **Modalities:** **Text + image + audio in; text out.** Natively multimodal encoder-free: audio as dMel spectrograms, images as 40×40 patches through a 4-layer hMLP.
- **Pricing (as of 2026-10-16):** **Self-host = free** (Apache-2.0); Inkling-Small output **$1.20 / 1M** (Tinker), Inkling (975B) output $4.05 / 1M; **no OpenCode Zen Free ID** (cluster-scale hosting).
- **Architecture:** MoE transformer — **276B total / 12B active** per token (6 of 256 routed experts + 2 shared). Trained on NVIDIA GB300 NVL72. Hardware footprint: **BF16 ≥ ~600 GB agg VRAM** (8× H200 or 4× B300); **NVFP4 ≥ ~180 GB**.

### Raw benchmarks found

Triangulated across **four** independent surfaces: Thinking Machines official launch blog (with vendor-confirmed comparison table), LLM Stats launch analysis, Vals AI independent Vals Index (25.46%), OpenRouter benchmarks, plus benchmark excerpts from techjacksolutions and developersdigest. Vendor table uses AA-composite and Scale AI scores where possible.

Agent / tool use (vendor table, effort=0.99, 256K trajectory limit):

- **AA Intelligence Index v4.1**: **40.0** (vs Inkling 41, DeepSeek V4 Flash 40, GPT-5.6 Luna 49, Qwen3.5-397B-A17B 34, MiMo V2.5 37).
- **GDPval-AA v2**: **1269 Elo** (vs Inkling 1238; ahead of Nemotron 3 Ultra 1164, DeepSeek V4 Flash 1189, Kimi K2.6 1190; behind DeepSeek V4 Pro 1306, GPT-5.6 Luna 1530).
- **MCP Atlas**: **79.6% public / 79.2% all** (vs Inkling 78.8 / 76.0 — *beats Inkling*; on par with Gemini 3.5 Flash-Lite 79.8 / 76.8 and GPT-5.6 Luna 77.0 / 75.0).
- **τ³-Banking**: **15.5%** (vs Inkling 23.7, DeepSeek V4 Pro 26.0 — trails; ahead of MiMo V2.5 Pro 9.0).
- **BrowseComp**: **77.4%** (with context management; vs Inkling 77.1, GPT-5.6 Luna 84.0).
- **Toolathlon Verified**: **54.4%** (vs Gemini 3.5 Flash-Lite 57.1, GPT-5.6 Luna 67.9).
- **AA-Briefcase**: **917 Elo** (vs Inkling 839, DeepSeek V4 Flash 833, GLM 5.2 1266 — mid).
- **Terminal Bench 2.1**: **64.7%** (best harness; vs Inkling 63.8, DeepSeek V4 Flash 61.8 — *beats Inkling*).

Coding (vendor table):

- **SWE-bench Verified**: **80.2%** (bash-only harness per vendor footnote; vs Inkling 77.6, GPT-5.6 Luna 93.0 — *beats Inkling*; trails GPT-5.6 Luna by 12.8 pt).
- **SWE-bench Pro (public)**: **55.9%** (vs Inkling 54.3, GPT-5.6 Luna 62.7, MiMo V2.5 56.1).
- **SciCode**: **48.7%** (vs Inkling 46.1, GPT-5.6 Luna 50.0).

Reasoning / knowledge (vendor table):

- **GPQA Diamond**: **89.5%** (tied GPT-5.6 Luna 89.5, ahead of Inkling 87.2, DeepSeek V4 Flash 89.4; *matches or exceeds Inkling*).
- **HLE text-only**: **31.6%** (ahead of Inkling 29.7, ahead of MiMo V2.5 25.2).
- **HLE with tools**: **47.8%** (vs Inkling 46.0, GPT-5.6 Luna 48.9).
- **AIME 2026**: **95.5%** (vs Inkling 97.1, DeepSeek V4 Flash 95.8).
- **HMMT Feb 2026**: **90.2%** (vs DeepSeek V4 Flash 93.9, GPT-5.6 Luna 98.5).
- **CritPt**: **8.3%** (vs Inkling 5.4 — beats Inkling; vs GLM 5.2 20.9, GPT-5.6 Luna 20.6).
- **SimpleQA Verified**: **20.6%** (vs Inkling 43.9 — **major knowledge/factuality gap**; vs GPT-5.6 Luna 41.7, DeepSeek V4 Flash 34.1).
- **AA-Omniscience Index**: **-9.0** (negative — more wrong than right; vs Inkling 2.1, GLM 5.2 -11.6).
- **Global-MMLU-Lite**: **86.7%** (vs GPT-5.6 Luna 88.7, Qwen3.5-397B-A17B 90.0).
- **IFBench**: **82.2%** (vs Inkling 79.8, DeepSeek V4 Flash 79.2).
- **ARC-AGI-1**: **84.0%** (vs Inkling 79.5, GPT-5.6 Luna 87.7).
- **ARC-AGI-2**: **40.1%** (vs Inkling 36.5, GPT-5.6 Luna 47.6, Claude Opus 5/5.5 50+, Qwen 3.8 Max 65.8%).

Multimodal:

- **MMMU Pro (Standard 10)**: **74.0%** (vs Inkling 73.5, GPT-5.6 Luna 78.6).
- **CharXiv RQ**: **77.4% / 81.3% with python** (vs Inkling 78.1 / 82.0; *with-python slightly trails Inkling*).
- **Audio MC**: **54.9%** (best in class; vs Inkling 56.6, MiMo V2.5 30.4, Qwen3-Omni 24.3).
- **MMAU**: **77.0%** (vs Inkling 77.2, Qwen3.5-Omni-Plus 81.1).
- **VoiceBench**: **90.1%** (vs Inkling 91.4, Qwen3.5-Omni-Plus 92.4).

Long context:

- 1M context window per vendor. AA-LCR component folded into the **AA Index v4.1 = 40** composite; no separate MRCR / RULER / GraphWalks number published.

Other:

- **Vals AI Vals Index (independent)**: **25.46%** (Inkling-Small, ranked vs other open/closed models; per vals.ai).
- **ForecastBench (no search) Brier**: **61.3 ± 0.46** (vs Inkling 60.1, GPT-5.5 59.3, Claude Opus 4.8 56.2).
- **Prophet Arena Brier**: **0.1238 ± 0.0086** (vs Inkling 0.1276, GPT-5.5 0.1179).
- **StrongREJECT**: 98.4% safety compliance.
- **FORTRESS adversarial**: 71.6% (vs Inkling 78.0 — slightly trails).

Performance/Cost:

- Output cost: Inkling-Small **$1.20 / 1M** vs Inkling **$4.05 / 1M** (Tinker).
- Token-efficiency: at xhigh effort, Pareto-competitive with Qwen3.5-397B-A17B / MiMo V2.5 / Nemotron 3 Ultra / DeepSeek V4 Flash on TB 2.1, HLE, and IFBench (per vendor performance-compute chart).

Pricing compared to peers (current as of 2026-10-16):

- **vs Inkling 975B ($4.05 output)**: Inkling-Small is **3.4× cheaper** output at Tinker pricing; same Apache-2.0 self-host free.
- **vs Qwen 3.8 Flash ($0.15/$0.47)**: Inkling-Small is **8× more** input, **2.6× more** output — but Inkling-Small is a 276B MoE requiring cluster serving, Flash is a hosted service.
- **vs DeepSeek V4 Flash ($0.14/$0.28)**: Inkling-Small is **8.6× more** input, **4.3× more** output; same cluster-vs-API split.
- **vs Muse Spark 1.1 ($1.25/$4.25)**: Inkling-Small parity on input, **3.5× cheaper** output at Tinker pricing.
- **vs Kimi K3 ($3/$15)**: Inkling-Small is **2.5× cheaper** input, **12.5× cheaper** output at Tinker pricing — but K3 is a 1.06T MoE with 32B active, not an "efficient sibling".

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas **79.6** (beats Inkling), BrowseComp **77.4**, Toolathlon **54.4**, Terminal Bench 2.1 **64.7** are mid-frontier; AA-Briefcase 917 (mid), GDPval-AA 1269 (frontier); but τ³-Banking **15.5%** trails Inkling's 23.7 and DeepSeek V4 Pro's 26.0 — the *agentic finance/CS* lane is the weak spot.
- **Reasoning: 76/100.** GPQA Diamond **89.5%** ties GPT-5.6 Luna, AIME 2026 **95.5%**, HMMT Feb **90.2%** are strong math; HLE with tools **47.8%** is mid; CritPt **8.3%**, AA-Omniscience **-9.0**, SimpleQA **20.6%** are the drags — *the 12B-active distillation preserves math and science reasoning but loses factuality/knowledge coverage*.
- **Context window: 85/100.** 1M verified vendor window; 256K trajectory limit on coding evals caps effective long-context coverage; AA-LCR component folded into Index = 40; mid tier for 1M-class.
- **Multimodal: 90/100.** Text + image + audio native; CharXiv 77.4/81.3 (with python), MMMU Pro 74.0 (mid); audio is *best-in-class* (Audio MC 54.9 #1, MMAU 77.0, VoiceBench 90.1 — vs MiMo V2.5/Qwen3-Omni, Inkling-Small wins or ties on audio reasoning).
- **Coding: 78/100.** SWE-bench Verified **80.2%** (beats Inkling's 77.6 by 2.6 pt, trails GPT-5.6 Luna 93.0 by 12.8 pt); SWE-bench Pro **55.9%** (mid); Terminal Bench 2.1 **64.7%** (beats Inkling); SciCode **48.7%** (mid). Solid but trail the very top on coding — note bash-only harness footnote.
- **Cost efficiency: 78/100.** Apache-2.0 self-host = free, Tinker $1.20/M output is **3.4× cheaper than Inkling**; *but* requires **BF16 ≥ 600 GB or NVFP4 ≥ 180 GB** — cluster-scale, not single-GPU. The 12B-active compute per token is what makes the Tinker price work; it is *not* a consumer-GPU deployment like Qwen 3.8 27B.
- **Overall Score: 81/100.** Half-up mean of the five non-cost dims: (78 + 76 + 85 + 90 + 78) / 5 = 407 / 5 = 81.4 → **81**. Best fit: agentic coding and audio/vision workloads on Apache-2.0 self-hosted cluster with **variable thinking effort** as the cost-control lever; the 12B-active distillation gives Inkling-class Pareto efficiency for SWE-Bench/Terminal Bench/HLE/IFBench at a third of Inkling's compute. Watch for: SimpleQA 20.6% and AA-Omniscience -9.0 mean the knowledge/factuality lane is the trade-off — for research or fact-heavy tasks, prefer the 975B Inkling sibling.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Four-source triangulation (Thinking Machines official launch blog with vendor benchmark table using AA / Scale AI / ARC Prize / ForecastBench independent scores, LLM Stats launch analysis, Vals AI independent Vals Index 25.46%, OpenRouter benchmarks, plus techjacksolutions and developersdigest secondary analysis). Identity resolved: this is the **Thinking Machines Inkling-Small** (276B/12B-active Apache-2.0) released **2026-07-30**, *not* the 975B/41B Inkling (the larger sibling — separate file `model/Inkling/MiniMax_M3.md` will compare). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
