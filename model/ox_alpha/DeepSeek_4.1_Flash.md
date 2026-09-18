# Ox Alpha — findings by DeepSeek 4.1 Flash

- Source: Stealth alias / Ox Alpha (`ox-alpha`, now identified as Z.ai GLM-5.3-Flash)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth alias; **resolved:** Z.ai GLM-5.3-Flash)
- **Short description:** A maker-anonymous stealth model that appeared on 2026-08-20 offering free access and drew developers to OpenRouter, OpenCode and Cline ("Mystery AI Model Ox Alpha Draws Developers With Free Access", Bloomberg, 2026-08-21). On 2026-08-26 Z.ai confirmed it was GLM-5.3-Flash, and coverage on 2026-08-28 confirmed the release shipped with MIT weights. **The alias and `model/glm-5.3-flash/` are the same weights**, so this file's scores mirror that entry; the difference is that Ox Alpha no longer exists as an independent, gratis endpoint.
- **Provider / access:** Third-party gateways (OpenRouter, OpenCode, Cline) during the stealth period; after identification, Z.ai's API, OpenRouter, Cloudflare Workers AI and Vercel AI Gateway, or self-hosting the MIT weights.
- **Release / knowledge:** Stealth appearance 2026-08-20; identity confirmed 2026-08-26.
- **IDs:** `stealth/ox-alpha` (alias, now retired); resolved id `glm-5.3-flash` / `zhipuai/glm-5.3-flash`.
- **Context window:** 1,000,000–1,048,576 tokens (alias listings showed 1M; the resolved model was later revised to 1,310,720 in one tracker). Max output 48,000 on hosted endpoints.
- **Modalities:** text, image and video input with text output; reasoning yes. The alias listings did not advertise PDF or audio input, which the resolved model documents — treat modality coverage as the resolved model's.
- **Pricing (as of 2026-09-18):** free during the stealth window only; now $0.15 / 1M in and $0.50 / 1M out (cached $0.03), or **$0** through OpenCode Zen's GLM-5.3 free alias. The free-access era that made Ox Alpha interesting has ended.
- **Architecture:** Mixture-of-Experts, 320B total / 18B active, 45 layers mixing KDA linear attention with NoPE sparse MLA attention, 8-of-288 experts, MIT license.

### Raw benchmarks found

> These are the resolved model's (GLM-5.3-Flash) published results. No benchmark was
> ever published under the "Ox Alpha" name itself.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor) — within a point of Claude Opus 4.8's 85.0
- AutomationBench: **48.8%**; Toolathon: **78.4%**; Agents Last Exam: **26.3%**; GDPval-AA v2 Elo: **1773**
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI via Model Beat)
- HLE with tools: **55.3%** (vendor); HLE (Epoch): **39.9%**; SimpleQA Verified: **32.0%**; AIME 2024/2025: **93.9%**
- Artificial Analysis Intelligence Index: **57** — third of 109 tracked models at launch
- LCR / MLCR / CritPt / omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **63.4%**; SciCode: **51.6%**; WebDev Arena: **1604 Elo**; NL2Repo: **56.3%**; Z.ai Code Bench v1.0: **29.0** vs Opus 4.8's 29.5
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Output speed: **49 tok/s** median (rank 31 of 36 tracked models) — the weakest operational figure in the entry

Multimodal / other vendor evals: Mvbench **77.8**, Chartography **78**, OfficeQA Pro **62.4**, CharXiv reasoning **89.4**, BabyVision **53.4**

Long context:

- no long-context recall score published under either the alias or the resolved name; the ~1M window is vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 84.3%, AutomationBench 48.8%, Toolathon 78.4% and a GDPval-AA Elo of 1773 are near-proprietary agent results; capped by the missing Tau3/Claw/MCP-Atlas values.
- **Reasoning: 86/100.** GPQA Diamond 90.2% and HLE-with-tools 55.3% are strong; HLE 39.9% without tools and SimpleQA 32.0% show the knowledge ceiling.
- **Context window: 95/100.** A ~1M-token window with 4.4× KV-cache compression and up to 1.31M in a later revision; no recall evidence at depth.
- **Multimodal: 88/100.** Native image, video (and, per the resolved model, PDF) input with CharXiv 89.4% and Mvbench 77.8%; text-only output.
- **Coding: 86/100.** DeepSWE 63.4%, SciCode 51.6%, WebDev Arena 1604 Elo and a near-Opus in-house code bench; missing SWE-bench Verified/Pro values cap it.
- **Cost efficiency: 92/100.** The stealth-era $0 access is gone; value now comes from $0.15/$0.50 list (or $0 on Zen's GLM-5.3 free alias, if that alias is available to you) against 49 tok/s throughput.
- **Overall Score: 89/100.** (88 + 86 + 95 + 88 + 86 + 92) / 6 = 89.2 → **89**. Best fit: the same use cases as GLM-5.3-Flash — cheap multimodal agent loops for coding and documents; the alias itself should no longer be treated as an independent model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (stealth-period coverage via Model Beat news index, Z.ai model page via HokAI, Epoch AI figures via Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.