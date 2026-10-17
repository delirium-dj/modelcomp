# GLM-5 — findings by Space Bunny

- Source: Z.ai / Zhipu AI (`zai-org/GLM-5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Zhipu AI's (Z.ai) flagship open-weight foundation model, released 2026-02-11 and pitched explicitly as the pivot from "vibe coding" to "agentic engineering" — long-horizon systems engineering and multi-step agent work. It was the **#1 open-weight model on Artificial Analysis and #1 among open models on LMArena Text Arena at launch**, and remains the base checkpoint of a long-lived line (GLM-5 Turbo, 5V-Turbo, 5.1, 5.2, 5.3, 5.3-Flash — all tracked separately in this dataset). Now **deprecated** in favour of GLM-5.1. It is a distinct model, not an alias.
- **Provider / access:** Hugging Face `zai-org/GLM-5` (MIT, 15 quantized variants) and ModelScope; Z.ai API at `api.z.ai` and BigModel.cn, Chat Completions (`client.chat.completions.create(model="glm-5")`); also served via OpenRouter, Fireworks, Together, NVIDIA NIM, Google Vertex AI and Novita — Artificial Analysis lists 6 API providers. Compatible with Claude Code and OpenClaw. Not on OpenCode Zen.
- **Release / knowledge:** released **2026-02-11** (a few days before Lunar New Year). Knowledge cutoff not published. Notably preceded by a stealth OpenRouter beta on 2026-02-06 called **"Pony Alpha"** — unattributed, free, 200K context, 40B+ tokens processed in its first day — which the community correctly identified as GLM-5.
- **IDs:** `zai-org/GLM-5` (weights), `glm-5` (Z.ai API), `z-ai/glm-5` (OpenRouter), `zhipuai/glm-5` (various gateways). No Free tier ID on aggregators, though Z.ai offers a free trial tier in-product.
- **Context window:** **200,000 tokens** (some routes list 203K–205K). Midtraining extended it progressively 32K → 128K → 200K. DeepSeek Sparse Attention (DSA) replaces dense attention, cutting long-sequence compute roughly 1.5–2×.
- **Modalities:** **text in, text out only.** Reasoning (thinking / non-thinking modes), tool calling, structured JSON output, and code execution supported. **No image input** — the vision model in this family is the separately tracked **GLM-5V-Turbo**, a distinct SKU.
- **Pricing (as of 2026-10-17):** **$1.00 input / $3.20 output per 1M** on Z.ai / Vertex / Zhipu (cache read $0.10–$0.20); Artificial Analysis blended 7:2:1 rate $0.66/1M. Cheaper routes exist — OpenRouter's cheapest is **$0.60 / $1.90**. Z.ai raised its GLM Coding Plan price 30% at launch. Weights are **MIT** and free, but at 744B, FP8 inference needs ≥8×H200/H20, so self-hosting is impractical for most buyers.
- **Architecture:** MoE, **744B total / 40B active** (Z.ai official figures; a handful of SEO aggregators circulate "745B / 44B" — the vendor and Hugging Face both say 744B/40B and those are used here); 80 layers, **256 experts with 8 active per token (5.9% sparsity)**; multi-latent attention with "Muon Split"; Multi-Token Prediction with a 2.76 tokens/step speculative acceptance rate (vs DeepSeek-V3.2's 2.55). Trained on **28.5T tokens** (up from GLM-4.5's 23T), including 160B unique tokens from issue-PR pairs for software engineering — **entirely on Huawei Ascend chips with MindSpore**, with no NVIDIA hardware, a deliberate sovereign-AI milestone given Zhipu's US Entity List placement.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **89.7%** (GLM-4.7 87.4, DeepSeek-V3.2 85.3, Claude Opus 4.5 91.6, Gemini 3 Pro 90.7, GPT-5.2 85.5) — near the top of that field
- τ²-Bench Airline (OpenRouter-measured, independent): **75.3%** (#26 of 93)
- MCP-Atlas (public set): **67.8%** (GLM-4.7 52.0, Kimi K2.5 63.8, Claude Opus 4.5 65.2, Gemini 3 Pro 66.6, GPT-5.2 68.0)
- Tool-Decathlon: **39.2%** (GLM-4.7 23.8, Claude Opus 4.5 43.5, GPT-5.2 46.3)
- BrowseComp: **62.0%**, and **75.9% with context management** (GLM-4.7 52.0/67.5)
- BrowseComp-Zh: **72.7%**
- CyberGym: **43.2%** (GLM-4.7 23.5, Kimi K2.5 41.3, Claude Opus 4.5 50.6)
- **Vending Bench 2: #1 among open-source models** — a simulated business run over a full year, with a $4,432 final balance. This is the single most relevant datapoint for the "long-horizon agentic" claim
- Frontend builds: **98% success rate** internally; CC-Bench-V2 **74.8%** end-to-end correctness, up 26% over GLM-4.7

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **28 (estimated) on v4.3.2**, #24 of 120 open-weight models in class. **Version caveat:** at launch GLM-5 scored **50 on Index v4.0**, the first open-weight model to do so — v4.3 replaced τ³-Banking with AutomationBench-AA and upgraded Terminal-Bench to 4.0, so the two numbers are not comparable and both are recorded rather than merged
- GPQA Diamond: **86.0%** (GLM-4.7 85.7, Kimi K2.5 87.6, Gemini 3 Pro 91.9, GPT-5.2 xhigh 92.4)
- Humanity's Last Exam: **30.5%** no tools / **50.4%** with tools (Gemini 3 Pro 37.2/45.8, GPT-5.2 35.4/45.5, Kimi K2.5 31.5/51.8, Claude Opus 4.5 28.4/43.4)
- AIME 2026 I: **92.7%**; HMMT Nov 2025: **96.9%**; IMOAnswerBench: **82.5%**
- **AA-Omniscience index: −1** — a 35-point improvement over GLM-4.7, and near parity rather than deeply negative. Z.ai positions GLM-5 as the knowledge-reliability leader among open weights
- LMArena Text Arena: **1452 (#1 among open models, #11 overall)** at launch; **1456** on the current Serenities/LMSYS reading

Coding:

- SWE-bench Verified: **77.8%** (GLM-4.7 73.8, DeepSeek-V3.2 73.1, Kimi K2.5 76.8, Gemini 3 Pro 76.2, GPT-5.2 75.4, Claude Opus 4.5 80.9)
- SWE-bench Multilingual: **73.3%** (GLM-4.7 66.7, Claude Opus 4.5 77.5, Gemini 3 Pro 65.0)
- Terminal-Bench 2.0: **56.2%** with Terminus-2 / **60.7%** with Z.ai's own stack / **61.1%** with the Claude Code harness (marked † in the launch table); GLM-4.7 was 41.0 Terminus-2 / 32.8 Claude Code. The harness spread is 5 points wide and is worth noticing
- CC-Bench-V2: **74.8%** end-to-end frontend correctness

Long context:

- 200K window with DSA sparse attention; context extended 32K → 128K → 200K during midtraining
- **No AA-LCR, MRCR, RULER or GraphWalks figure has been published for GLM-5** — the long-context claim rests on the architecture and the window size, not on measured retrieval

Multimodal:

- **None — text-only**, confirmed by Artificial Analysis ("Can GLM-5 process images? No") and by LLM Reference's family matrix, which marks Vision/Multimodal as "No" for GLM-5 and "Yes" only for GLM-5V-Turbo and GLM-5.3-Flash.

Speed (independent):

- **70.8 tokens/s** output, TTFT **1.69 s** (Artificial Analysis, median across providers; class median 68.2 t/s and 1.71 s — essentially class-average). Serenities AI measures 55 tok/s and 1030 ms TTFT, so real-world throughput varies by route

### Normalized scores (1–100)

- **Tool use: 86/100.** The strongest dimension and the one Z.ai explicitly optimised for: **τ²-Bench 89.7%** (essentially tied with the closed frontier), MCP-Atlas 67.8%, BrowseComp 62.0% rising to **75.9% with context management**, Tool-Decathlon 39.2%, CyberGym 43.2%, and the **#1 finish among open-source models on Vending Bench 2**, a full-year simulated-business benchmark that is the most honest available test of long-horizon agentic planning. Capped below 90 because Tool-Decathlon (39.2) and CyberGym (43.2) still trail Claude Opus 4.5 and GPT-5.2, and because BrowseComp-Zh (72.7) is well behind GPT-5.2's 76.1.
- **Reasoning: 84/100.** Solidly above average and genuinely competitive: GPQA Diamond 86.0%, AIME 2026 92.7%, HMMT 96.9%, IMOAnswerBench 82.5%, HLE 50.4% with tools, an LMArena Elo of ~1454 that puts it in the global top ten, and an **AA-Omniscience index of −1 — a 35-point jump over its predecessor and near-neutral rather than deeply negative**, which is a real reliability advantage over most peers. Capped by honest gaps: GPQA 86.0 vs Gemini 3 Pro's 91.9 and GPT-5.2's 92.4, HLE no-tools 30.5 vs Gemini's 37.2, and the fact that the current AA index figure is an **estimate**, with GLM-5 now deprecated and no longer benchmarked.
- **Context window: 72/100.** A real 200,000-token window, progressively extended through midtraining and made affordable by DeepSeek Sparse Attention — genuinely useful for large codebases and documents. Capped there (rather than higher) because the whole rest of the 2026 frontier in this dataset runs at 1M — Opus 4.7, Opus 5, Kimi K3, Qwen 3.8, Beam, Nemotron 3.5 Super VL — and GLM-5's own successors (5.2, 5.3) moved to 1M, so 200K is now a generational step behind. **No long-context retrieval benchmark has ever been published for it.**
- **Multimodal: 15/100.** **Text-only**, confirmed independently by Artificial Analysis and by the vendor-family spec matrix. Vision in this lineage lives in GLM-5V-Turbo, which is a different model in a different folder; its capabilities are not transferable here. No proxy justifies scoring this above the text-only floor.
- **Coding: 82/100.** Strong for an open-weight model at launch: SWE-bench Verified 77.8% (beating Gemini 3 Pro and GPT-5.2, trailing only Claude Opus 4.5's 80.9%), SWE-bench Multilingual 73.3%, Terminal-Bench 2.0 56.2–61.1% depending on harness, CC-Bench-V2 74.8% end-to-end, 98% internal frontend-build success, and 160B tokens of issue-PR training data. Held below the leaders by the Terminal-Bench harness spread (32.8% for GLM-4.7 on Claude Code vs 56.2% for GLM-5 on Terminus-2 shows how much the harness matters), by the absence of any SWE-bench Pro figure, and by being eight months superseded.
- **Cost efficiency: 62/100.** Reasonable but no longer a standout: $1.00/$3.20 on Z.ai, ~5× cheaper on input and ~8× on output than Claude Opus 4.6 at launch, with MIT weights free to self-host — but Artificial Analysis explicitly classes both rates as "at the higher end" against open-weight medians of $0.43/$1.68, and cheaper routes exist (OpenRouter $0.60/$1.90). Z.ai also raised its Coding Plan 30% at launch. Offsetting this, the 80% cache discount and MIT license are genuine advantages, and the 744B size means self-hosting is not a realistic cost saving for anyone but a hyperscaler.
- **Overall Score: 68/100.** Mean of the five non-cost dims (86 + 84 + 72 + 15 + 82) / 5 = 67.8, half-up to 68. Best-fit recommendation: a strong **text-only** open-weight pick for agentic tool use and long-horizon autonomous work where τ²-class tool reliability and MIT licensing matter — but pick **GLM-5.1 or 5.3** instead for anything new, since GLM-5 itself is deprecated, eight months old, and capped at 200K context while its own successors run at 1M.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across Z.ai's official GLM-5 launch blog (the primary benchmark table, including the Terminus-2 vs Claude Code harness split and the † notation), Artificial Analysis's GLM-5 model page (deprecation notice, index v4.3.2 estimate, price/speed/context/modalities), Hugging Face's `mlabonne` GLM-5 breakdown, NYU Shanghai RITS's technical summary (architecture details: 80 layers, Muon Split, MTP acceptance 2.76, 32K→128K→200K midtraining), LLM Reference's GLM-5 family specification matrix (confirming GLM-5 is text-only and vision sits with GLM-5V-Turbo), Serenities AI's aggregate (LMArena Elo, per-provider pricing), SCMP launch coverage, and HyperAI's launch report (Pony Alpha stealth beta, Ascend/MindSpore training, ≥8×H200 deployment floor). Conflicting figures — the "745B/44B active" SEO-site variant, and the AA Intelligence Index **50 on v4.0 vs 28 on v4.3.2** — are flagged explicitly and resolved in favour of the vendor and the current index version; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.