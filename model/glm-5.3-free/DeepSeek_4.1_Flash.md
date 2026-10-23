# GLM 5.3 Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / GLM 5.3 Free (`opencode/glm-5.3-free` — free alias of GLM-5.3-Flash, Z.ai)
- Date: 2026-10-16 (UTC) — third pass (previous Signatures 2026-10-05 / 2026-09-18); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `glm-5.3-free` (404); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: Z.ai official blog + docs.z.ai, NVIDIA NGC/NIM model cards, Artificial Analysis, BenchLM, Vals AI, DataCamp, LLM-Stats, Lambda, Kilo Code, Ollama, OpenRouter).
> New since 2026-10-05: **independent benchmark rows now exist** where the earlier passes reported none. Vals AI now runs **Terminal-Bench 2.1 62.9%**, **SWE-bench (Vals) 92.0%**, **LiveCodeBench (Vals) 80.5%**, **GPQA Diamond (Vals) 86.4%** and **MMLU-Pro (Vals) 86.1%**. BenchLM carries a **57.36 independent public score (#56/216)** with lane scores Agentic 55.7 (#34/123), Coding 49.3 (#42/146), Reasoning 81.1 (#11/28), Multimodal 60.5 (#43/177). Official architecture is now precisely documented (NVIDIA NIM): **34 KDA linear-attention layers interleaved with 11 DeepSeek Sparse Attention layers (every 4th), Manifold-Constrained Hyper-Connections, 288 routed experts top-8, 1 MTP layer, native FP8, 30T-token multimodal corpus**. Official context/max-output confirmed **1M / 128K**; a high-speed sibling **GLM-5.3-FlashX** (200 tok/s, launched 2026-09) shares the weights.
> **Conflicts surfaced:** (1) **Terminal-Bench 2.1 84.3% (vendor)** vs **62.9% (Vals)** — a ~21-pt independent gap, the largest in this entry. (2) **GPQA Diamond 90.2% (Epoch)** vs **86.4% (Vals)**. (3) **AA Intelligence Index 57** described variously as "third of 109 tracked models" (earlier pass) vs "**#4 globally**" (GLM microsite) vs the flagship **GLM-5.3 at 60** (DataCamp) — index rebases make the rank unstable. (4) **Input modalities** — Z.ai blog/OpenRouter list **text + image + video**, but NVIDIA's NIM card lists **text + image only**; **PDF is not confirmed by any first-party source** (the earlier pass's "PDF" claim is corrected here). (5) **Max output** 128K (docs.z.ai) vs 131,072 (OpenRouter) vs 943,717 (Kilo/OpenRouter completion cap). (6) **Free-alias privacy** — the Zen page still does not flag GLM-5.3 for training-on-prompts, but the OpenRouter stealth terms authorized training/improvement (see the Ox Alpha entry).
> Sources: https://z.ai/blog/glm-5.3-flash · https://docs.z.ai/guides/vlm/glm-5.3-flash · https://docs.api.nvidia.com/nim/reference/z-ai-glm-5-3-flash · https://catalog.ngc.nvidia.com/orgs/nim/zai-org/models/glm-5.3-flash · https://benchlm.ai/models/glm-5-3-flash · https://benchlm.ai/compare/glm-5-3-flash-vs-gpt-realtime · https://www.datacamp.com/blog/glm-5-3-flash · https://llm-stats.com/blog/research/glm-5.3-flash-launch · https://lambda.ai/inference-models/zai-org/glm-5.3-flash · https://kilo.ai/models/z-ai-glm-5-3-flash · https://ollama.com/library/glm-5.3-flash

## Model card

- **Name:** GLM 5.3 Free (OpenCode Zen free tier; underlying weights = Z.ai GLM-5.3-Flash)
- **Short description:** OpenCode Zen's free-tier alias serving Z.ai's GLM-5.3-Flash weights. The paid model is a fast, open-weight, natively multimodal sibling of the flagship GLM-5.3, priced at roughly a tenth of the full model and famous for its six-day stealth run under the codename "Ox Alpha". Free access is the only difference from the `model/glm-5.3-flash/` entry — same weights, same benchmark profile.
- **Provider / access:** OpenCode Zen — OpenAI-compatible endpoint. The models.dev record for `zhipuai/glm-5.3-flash` lists $0.00/$0.00, and Zen's free aliases follow the `opencode/` + model-name + `-free` naming pattern, so this ID is the free path to the same weights. Paid fallbacks: Z.ai API, OpenRouter (`z-ai/glm-5.3-flash`), Cloudflare Workers AI, Vercel AI Gateway, NVIDIA NIM, Lambda. A high-speed sibling `glm-5.3-flashx` (200 tok/s) shares the weights but drops `parallel_tool_calls`/`structured_outputs`/`seed`.
- **Release / knowledge:** Underlying model released 2026-08-26 (~08-25 HF upload); the earlier stealth appearance was 2026-08-20. Knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-free` (Zen free tier); paid `glm-5.3-flash` / `z-ai/glm-5.3-flash`; MIT-licensed weights at `zai-org/GLM-5.3-Flash`.
- **Context window:** **1,048,576 tokens** (official), **max output 128K** (docs.z.ai; OpenRouter lists 131,072). The free tier's own caps are not separately documented by Zen, so treat the free window as family-level.
- **Modalities:** text + image + video input with tool calls; text output. NVIDIA's NIM card lists text + image only; **PDF is unconfirmed by first-party sources**. Reasoning yes.
- **Pricing (as of 2026-10-16):** **Free** through the Zen alias. List elsewhere is $0.15 / 1M in, $0.50 / 1M out, $0.03 cached (the launch 50%-off promo ended 2026-09-09 16:00 UTC). Aggregator markups (aimlapi $0.195/$0.325) exist. Zen's privacy page does **not** list GLM-5.3 among models whose free-period prompts may be used for training.
- **Architecture:** sparse MoE, **320B total / 18B active**, 45 decoder layers — a hybrid attention stack of **34 KDA linear-attention layers + 11 DeepSeek Sparse Attention layers (every fourth)**, plus **Manifold-Constrained Hyper-Connections (mHC)**, **288 routed experts top-8**, a vision encoder and **1 MTP** speculative-decoding layer; native FP8; 30T-token multimodal pretraining; MIT license.

### Raw benchmarks found

> Same weights as the paid GLM-5.3-Flash; vendor-reported and third-party numbers carry over.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor) but **62.9%** (Vals) — the independent harness gap is large
- Toolathlon Verified: **78.4%** (vendor, official service pass@1, 3 runs); AutomationBench v1.0.6: **48.8%** (vs GLM-5.2 26.2%); Agents Last Exam: **26.3%**
- GDPval-AA v2 Elo: **1773** (Artificial Analysis, leads the comparison set); HLE with tools **55.3%**
- BenchLM public-lane Agentic **55.7 (#34/123)**
- Cyber (2026-09-29/30): Anthropic's Frontier Red Team reported **ExploitBench 12%** and a $20.40 autonomous Chrome exploit chain (same weights as the paid route)
- Tau3-Banking / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI) vs **86.4%** (Vals); MMLU-Pro: **86.1%** (Vals)
- HLE: **55.3%** with tools (vendor); **39.9%** (Epoch); SimpleQA Verified **32.0%**; AIME 2024/2025 **93.9%**
- Artificial Analysis Intelligence Index: **57** ("#4 globally" per the GLM microsite; v4.1.1; flagship GLM-5.3 = 60) — class median 29
- BenchLM independent public score: **57.36 (#56/216)**; Reasoning lane **81.1 (#11/28)**
- LCR / MLCR / CritPt / omniscience: **no verified public score found**

Coding:

- SWE-bench: **92.0%** (Vals split — new independent row); LiveCodeBench: **80.5%** (Vals)
- DeepSWE v1.1: **63.4%** (vs GLM-5.2 46.2); NL2Repo **56.3%**; SciCode **51.6%**; WebDev Arena **1604 Elo**
- Z.ai Code Bench v1.0 (max effort): **29.0** vs Opus 4.8's 29.5; OpenHarmony Bench **57.3**; FrontierSWE v2 **18.1**; Bug Hunt Bench **17.7 fixes**
- BenchLM public-lane Coding **49.3 (#42/146)**
- Output speed: **~49 tok/s** median (paid route) — FlashX offers ~200 tok/s

Multimodal / other vendor evals: CharXiv Reasoning w/ Tools **89.4**, Chartography w/ Tools **78.0**, MVBench **77.8** (earlier pass wrote "Mvbench"), MMVU **80.5**, BabyVision **53.4** (trails Gemini 3.7 Flash's 70.9); BenchLM Multimodal lane **60.5 (#43/177)**; OfficeQA Pro **62.4**.

Long context:

- ~1M-token window (official), KV cache 4.44× smaller and attention compute 3.01× less than GLM-5.3; no independent recall benchmark (a quantized-test prompt recovered a needle at ~262K under a 6-hour qualification). No MRCR/RULER/GraphWalks value published.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vendor Terminal-Bench 2.1 84.3%, Toolathlon 78.4%, AutomationBench 48.8% and a GDPval-AA Elo of 1773 are near-proprietary at zero cost, but the independent Vals Terminal-Bench 2.1 of 62.9% and missing Tau3/Claw/MCP-Atlas evidence cap it below the earlier 89.
- **Reasoning: 86/100.** GPQA Diamond 86.4–90.2% and HLE-with-tools 55.3% are strong; HLE 39.9% without tools, SimpleQA 32.0% and the index-rank instability mark the limit.
- **Context window: 95/100.** Official 1M-token multimodal window with 128K output and 4.44× KV-cache compression free of charge; the free tier's own cap is undocumented and no recall-at-depth benchmark exists.
- **Multimodal: 88/100.** Native image + video input (NVIDIA lists image only) with CharXiv-R 89.4%, MMVU 80.5% and MVBench 77.8%; text-only output, and the modality conflict keeps it short of 90.
- **Coding: 87/100.** New Vals rows (SWE-bench 92.0%, LiveCodeBench 80.5%) plus DeepSWE 63.4%, SciCode 51.6% and WebDev Arena 1604 lift it one point; no vendor SWE-bench Verified/Pro value caps it.
- **Cost efficiency: 100/100.** $0 through the Zen alias, with a policy page that does not flag GLM-5.3 for training-on-free-prompts (unlike the other free aliases in this scan).
- **Overall Score: 89/100.** (88 + 86 + 95 + 88 + 87) / 5 = 88.8 → **89**. Best fit: cost-free multimodal agent loops for coding and document work where GLM's ~49 tok/s output speed is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Z.ai blog and docs.z.ai model guide, NVIDIA NIM/NGC cards, Artificial Analysis, BenchLM, Vals AI, DataCamp, LLM-Stats, Lambda, Kilo Code, Ollama and OpenRouter, adding the first independent Vals/BenchLM rows and correcting the architecture, modality and max-output details over the 2026-10-05 and 2026-09-18 passes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
