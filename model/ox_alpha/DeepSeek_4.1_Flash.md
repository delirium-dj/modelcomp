# Ox Alpha — findings by DeepSeek 4.1 Flash

- Source: Stealth alias / Ox Alpha (`ox-alpha`, now identified as Z.ai GLM-5.3-Flash)
- Date: 2026-10-16 (UTC) — third pass (previous Signatures 2026-10-05 / 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: Z.ai official blog + docs.z.ai, NVIDIA NGC/NIM cards, Artificial Analysis, BenchLM, Vals AI, DataCamp, LLM-Stats, SCMP, OpenRouter, Kilo Code, Ollama).
> New since 2026-10-05: **first independent benchmark rows** — Vals AI now runs **Terminal-Bench 2.1 62.9%**, **SWE-bench (Vals) 92.0%**, **LiveCodeBench (Vals) 80.5%**, **GPQA Diamond (Vals) 86.4%**, **MMLU-Pro (Vals) 86.1%**; BenchLM carries **57.36 (#56/216)** with lanes Agentic 55.7 (#34/123), Coding 49.3 (#42/146), Reasoning 81.1 (#11/28), Multimodal 60.5 (#43/177). Stealth-era facts firmed up: OpenRouter's `stealth/ox-alpha` page confirms "developed and operated by ZAI", 1.0M context, released **Aug 20, 2026**, and **"prompts and completions retained by the provider and are not used for training"**; OpenCode's run was **free for one week**, sized at **100 trillion tokens/day** and reported to have processed **62 trillion tokens** by reveal (SCMP), running during the trial on **100,000 domestically produced chips**. Official architecture (NVIDIA NIM): **34 KDA linear-attention layers + 11 DeepSeek Sparse Attention layers (every 4th), mHC, 288 experts top-8, 1 MTP layer, native FP8**. A high-speed sibling **GLM-5.3-FlashX** (200 tok/s) now exists.
> **Conflicts surfaced:** (1) **Terminal-Bench 2.1 84.3% (vendor)** vs **62.9% (Vals)** — ~21-pt independent gap. (2) **GPQA Diamond 90.2% (Epoch)** vs **86.4% (Vals)**. (3) **AA Intelligence Index 57** described as "third of 109" (earlier pass) vs "**#4 globally**" (GLM microsite) vs the flagship **GLM-5.3 = 60**. (4) **Modalities** — Z.ai/OpenRouter say **text + image + video**, NVIDIA NIM says **text + image only**, and **PDF was never confirmed first-party** (corrected here). (5) **Max output** 128K (docs.z.ai) vs 131,072 (OpenRouter) vs 48,000 quoted on some hosted alias listings. (6) **Privacy split** — the stealth route carried OpenRouter's training/improvement EULA while OpenCode Zen is zero-retention.
> Sources: https://openrouter.ai/stealth/ox-alpha · https://z.ai/blog/glm-5.3-flash · https://docs.z.ai/guides/vlm/glm-5.3-flash · https://docs.api.nvidia.com/nim/reference/z-ai-glm-5-3-flash · https://benchlm.ai/models/glm-5-3-flash · https://www.datacamp.com/blog/glm-5-3-flash · https://llm-stats.com/blog/research/glm-5.3-flash-launch · https://www.scmp.com/tech/tech-trends/article/zai-glm-5-3-flash-stealth-release

## Model card

- **Name:** Ox Alpha (stealth alias; **resolved:** Z.ai GLM-5.3-Flash)
- **Short description:** A maker-anonymous stealth model that appeared on 2026-08-20 offering free access and drew developers to OpenRouter, OpenCode and Cline ("Mystery AI Model Ox Alpha Draws Developers With Free Access", Bloomberg, 2026-08-21). On 2026-08-26 Z.ai confirmed it was GLM-5.3-Flash; coverage on 2026-08-28 confirmed MIT weights. **The alias and `model/glm-5.3-flash/` are the same weights**, so this file's scores mirror that entry; the difference is that Ox Alpha is now a retired alias, not an independent model. OpenCode's free run was ratcheted to **100 trillion tokens/day** and had already served **62 trillion tokens** when the identity was revealed (SCMP), on a trial cluster of **100,000 domestically produced chips**.
- **Provider / access:** Third-party gateways (OpenRouter `stealth/ox-alpha`, OpenCode, Cline) during the stealth period; after identification, Z.ai's API, OpenRouter (`z-ai/glm-5.3-flash`), Cloudflare Workers AI, Vercel AI Gateway, NVIDIA NIM, Lambda, or self-hosting the MIT weights. A 1M-context NEAR AI Cloud route appeared 2026-09-28.
- **Release / knowledge:** Stealth appearance **2026-08-20**; identity confirmed 2026-08-26. Knowledge cutoff not published (OpenRouter lists it blank; tokenizer "Other").
- **IDs:** `stealth/ox-alpha` (alias, now retired); resolved id `glm-5.3-flash` / `z-ai/glm-5.3-flash` / `zhipuai/glm-5.3-flash`.
- **Context window:** **1,048,576 tokens** (official); OpenRouter's stealth page listed 1.0M and the resolved route 131,072 max output. One tracker revised the window to 1,310,720. Max output: 128K (docs.z.ai), 131,072 (OpenRouter), or 48,000 on some hosted alias listings.
- **Modalities:** text, image and video input with text output; reasoning yes. NVIDIA's NIM card lists **text + image only**, and **PDF was never confirmed by a first-party source** — treat modality coverage as the resolved model's (text + image + video).
- **Pricing (as of 2026-10-16):** free during the stealth window only; now $0.15 / 1M in and $0.50 / 1M out (cached $0.03; launch promo ended 2026-09-09), or **$0** through OpenCode Zen's GLM-5.3 free alias. **Privacy:** the stealth route fell under OpenRouter's terms authorizing prompts for training/improvement, whereas OpenCode Zen is zero-retention — a meaningful difference from the free-tier aliases this scan otherwise treats as private.
- **Architecture:** sparse MoE, **320B total / 18B active**, 45 decoder layers — hybrid attention of **34 KDA linear-attention layers + 11 DeepSeek Sparse Attention layers (every fourth)**, plus **Manifold-Constrained Hyper-Connections**, **288 routed experts top-8**, a vision encoder and **1 MTP** layer; native FP8; MIT license.

### Raw benchmarks found

> These are the resolved model's (GLM-5.3-Flash) published results. No benchmark was
> ever published under the "Ox Alpha" name itself.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor, within a point of Claude Opus 4.8's 85.0) but **62.9%** (Vals) — large independent gap
- AutomationBench v1.0.6: **48.8%**; Toolathlon Verified: **78.4%**; Agents Last Exam: **26.3%**; GDPval-AA v2 Elo: **1773**; HLE with tools **55.3%**
- BenchLM public-lane Agentic **55.7 (#34/123)**
- Cyber/offensive-security (2026-09-29/30): Anthropic's Frontier Red Team reported **ExploitBench 12%** (vs Claude Mythos 14%) and an autonomous Chrome exploit chain for **$20.40** — same weights as the alias (Anthropic; mixed-news.com)
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI via Model Beat) vs **86.4%** (Vals); MMLU-Pro **86.1%** (Vals)
- HLE with tools: **55.3%** (vendor); HLE (Epoch): **39.9%**; SimpleQA Verified: **32.0%**; AIME 2024/2025: **93.9%**
- Artificial Analysis Intelligence Index: **57** — "third of 109 tracked models" (earlier pass) vs "**#4 globally**" (GLM microsite); flagship GLM-5.3 = 60
- BenchLM independent public score: **57.36 (#56/216)**; Reasoning lane **81.1 (#11/28)**
- LCR / MLCR / CritPt / omniscience: **no verified public score found**

Coding:

- SWE-bench (Vals): **92.0%** — new independent row; LiveCodeBench (Vals): **80.5%**
- DeepSWE v1.1: **63.4%**; SciCode: **51.6%**; WebDev Arena: **1604 Elo**; NL2Repo: **56.3%**; Z.ai Code Bench v1.0: **29.0** vs Opus 4.8's 29.5; OpenHarmony **57.3**; FrontierSWE v2 **18.1**
- BenchLM public-lane Coding **49.3 (#42/146)**
- SWE-bench Verified / SWE-bench Pro (vendor values): **no verified public score found**
- Output speed: **49 tok/s** median (rank 31 of 36 tracked models) — the weakest operational figure; the sibling GLM-5.3-FlashX runs ~200 tok/s

Multimodal / other vendor evals: MVBench **77.8** (earlier pass wrote "Mvbench"), Chartography w/ Tools **78.0**, MMVU **80.5**, OfficeQA Pro **62.4**, CharXiv Reasoning w/ Tools **89.4**, BabyVision **53.4**; BenchLM Multimodal lane **60.5 (#43/177)**.

Long context:

- Official ~1M-token window (OpenRouter stealth page: 1.0M); no long-context recall score published under either the alias or the resolved name (NEAR AI Cloud serves a 1M route). No MRCR/RULER value.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 84.3%, AutomationBench 48.8%, Toolathlon 78.4% and a GDPval-AA Elo of 1773 are near-proprietary agent results corroborated by the ExploitBench 12% / $20.40 exploit-chain finding; the independent Vals Terminal-Bench 2.1 of 62.9% and missing Tau3/Claw/MCP-Atlas values keep it one point below the earlier 89.
- **Reasoning: 86/100.** GPQA Diamond 86.4–90.2% and HLE-with-tools 55.3% are strong; HLE 39.9% without tools and SimpleQA 32.0% show the knowledge ceiling.
- **Context window: 95/100.** A ~1M-token window with 4.4× KV-cache compression and up to 1.31M in one later revision; no recall evidence at depth.
- **Multimodal: 88/100.** Native image and video input (NVIDIA lists image only; PDF never confirmed) with CharXiv-R 89.4%, MMVU 80.5% and MVBench 77.8%; text-only output.
- **Coding: 87/100.** New Vals SWE-bench 92.0% and LiveCodeBench 80.5% plus DeepSWE 63.4%, SciCode 51.6%, WebDev Arena 1604 Elo and a near-Opus in-house code bench lift it one point; missing vendor SWE-bench Verified/Pro values cap it.
- **Cost efficiency: 92/100.** The stealth-era $0 access is gone; value now comes from $0.15/$0.50 list (or $0 on Zen's GLM-5.3 free alias, if available) against 49 tok/s throughput.
- **Overall Score: 89/100.** (88 + 86 + 95 + 88 + 87) / 5 = 88.8 → **89**. Best fit: the same use cases as GLM-5.3-Flash — cheap multimodal agent loops for coding and documents; the alias itself should no longer be treated as an independent model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the OpenRouter stealth page, official Z.ai blog and docs.z.ai model guide, NVIDIA NIM/NGC cards, Artificial Analysis, BenchLM, Vals AI, DataCamp, LLM-Stats, SCMP, Kilo Code and Ollama, adding the first independent Vals/BenchLM rows and correcting the architecture, modality and max-output details over the 2026-10-05 and 2026-09-18 passes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
