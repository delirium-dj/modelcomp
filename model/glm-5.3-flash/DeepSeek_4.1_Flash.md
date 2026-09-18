# GLM-5.3-Flash — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.3-Flash (`glm-5.3-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (no "Free" wording on Z.ai; a separate `glm-5.3-free` Zen ID exists)
- **Short description:** Z.ai's fast, open-weight, natively multimodal sibling to the flagship GLM-5.3, priced at roughly a tenth of the full model. It was Z.ai's first natively multimodal GLM-5 release and, before confirmation, circulated for six days on OpenRouter, OpenCode and Cline under the codename "Ox Alpha" — so it is the model behind the `ox_alpha` folder as well.
- **Provider / access:** Z.ai's official API plus OpenRouter, Cloudflare Workers AI, Vercel AI Gateway and others; MIT-licensed FP8/BF16 weights at `zai-org/GLM-5.3-Flash`. Also served through OpenCode Zen as a free tier alias (see `model/glm-5.3-free/`).
- **Release / knowledge:** Model identity confirmed 2026-08-26 (a second tracker dates the catalog entry 2026-08-20). Knowledge cutoff not published.
- **IDs:** `glm-5.3-flash` (Z.ai / OpenRouter); Zen free alias in the sibling folder. Weights: `zai-org/GLM-5.3-Flash`.
- **Context window:** 1,048,576 tokens per the vendor page, extended to 1,310,720 in a later tracker revision; max output 48,000 tokens on the hosted OpenRouter endpoint. An IndexPool mechanism compresses indexer key vectors, cutting attention compute ~3× and KV-cache size 4.4× versus full GLM-5.3.
- **Modalities:** text, image, video and PDF input with tool calls; text + tool-call output. First natively multimodal GLM-5 model.
- **Pricing (as of 2026-09-18):** $0.15 / 1M in, $0.50 / 1M out, $0.03 / 1M cached input on Z.ai; a launch promotion halved all three through 2026-09-09. Third-party listings: Wafer $0.10/$0.35 (cheapest credible), Makora $0.14. Artificial Analysis blended price $0.10–$0.24 / 1M. Self-hosting the FP8 checkpoint needs an 8-GPU Hopper-class node (~306 GB VRAM).
- **Architecture:** Mixture-of-Experts transformer, 320B total parameters with 18B active per token, 45 layers mixing KDA linear attention with NoPE sparse MLA attention and 8-of-288 expert routing. MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor-reported) — within a point of Claude Opus 4.8's 85.0 and close to GPT-5.6 Terra's 87.4%
- AutomationBench: **48.8%** (nearly doubles GLM-5.2's 26.2%)
- Toolathon: **78.4%**; Agents Last Exam: **26.3%**; GDPval-AA v2 Elo: **1773**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI via Model Beat) — note Z.ai's own disclosure omits GPQA-class academic benchmarks for the Flash variant
- HLE with tools: **55.3%** (vendor); HLE (Epoch measurement): **39.9%**
- SimpleQA Verified: **32.0%**; AIME 2024/2025: **93.9%** (Epoch AI via Model Beat)
- Artificial Analysis Intelligence Index: **57** — described as third of 109 tracked models at launch
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- DeepSWE v1.1: **63.4%** (vendor) — up from GLM-5.2's 46.2%
- SciCode: **51.6%** (revised up from 46.1%); WebDev Arena: **1604 Elo**; NL2Repo: **56.3%**; Z.ai Code Bench v1.0: **29.0** versus Claude Opus 4.8's 29.5
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found** for the Flash variant
- Output speed: **49 tok/s** median (Artificial Analysis) — rank 31 of 36, a real throughput weakness

Multimodal / other vendor evals: Mvbench **77.8**, BabyVision **53.4**, Chartography **78**, OfficeQA Pro **62.4**, CharXiv reasoning **89.4**

Long context:

- Z.ai has not published a long-context recall score specific to this model; the 1M+ window is vendor-claimed with no independent retrieval evidence found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 84.3%, AutomationBench 48.8%, Toolathon 78.4% and a GDPval-AA Elo of 1773 put it within a point of the best proprietary agents; capped by the missing Tau3/Claw/MCP-Atlas numbers.
- **Reasoning: 86/100.** GPQA Diamond 90.2%, HLE-with-tools 55.3% and an AA Intelligence Index of 57 are strong; HLE at 39.9% without tools and SimpleQA 32.0% show the knowledge-depth limit.
- **Context window: 95/100.** A 1,048,576-token window (1.31M in a later revision) with 48K output and ~4.4× KV-cache compression; no recall-at-depth evidence keeps it below the maximum.
- **Multimodal: 88/100.** Native image, video and PDF input with CharXiv 89.4% and Mvbench 77.8% at a tenth of flagship pricing; text-only output and no native audio input.
- **Coding: 86/100.** DeepSWE 63.4%, SciCode 51.6%, WebDev Arena 1604 Elo and a near-Opus Z.ai Code Bench score; the missing SWE-bench Verified/Pro values are the only significant gap.
- **Cost efficiency: 92/100.** $0.15/$0.50 with $0.03 cached and $0.10/$0.35 third-party routes makes it cheaper than 85% of GA models with published prices; 49 tok/s throughput is the trade-off.
- **Overall Score: 89/100.** (88 + 86 + 95 + 88 + 86 + 92) / 6 = 89.2 → **89**. Best fit: cheap, self-hostable or hosted multimodal agent loops for coding and document work that can tolerate slow output speed.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Z.ai model page via HokAI, Epoch AI figures via Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.