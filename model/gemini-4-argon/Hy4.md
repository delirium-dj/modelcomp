- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's September/October 2026 frontier base model for complex, long-running deep-reasoning workflows across coding, finance and legal work, with defensive-cyber capabilities. It is the base that Gemini 4 Carbon enhances and Gemini 4 Hydrogen succeeds as a fast tier; a distinct SKU, not an alias.
- **Provider / access:** Gemini API (globally open to developers and enterprises as of 2026-10-14), Google Antigravity, the Gemini app and Search AI mode for Google AI subscribers; early access via the Fairwind Program for vetted cybersecurity experts. Google also submitted it to the US government's voluntary pre-release evaluation process.
- **Release / knowledge:** Announced 2026-09-30 (Baidu Baike) with a global API rollout reported 2026-10-14; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-4-argon` (vendor-family ID as cited in Google's model naming).
- **Context window:** Up to 1,000,000 tokens with a reported maximum output of up to 1M tokens (Baidu Baike); the Google DeepMind official table scores it on the same GraphWalks 256k→1M long-context row as Carbon. Exact input/output split: no verified public score found.
- **Modalities:** text, image, video, audio and document/PDF in; text out (Google DeepMind official table scores it on Chartography and Blueprint-Bench 2 multimodal understanding). Reasoning with selectable effort. Native tool use. No verified image/audio output.
- **Pricing (as of 2026-11-14):** $2 / 1M input tokens reported at global API rollout (myestore news aggregation of Google's announcement); output price: no verified public score found. No free ID verified.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Google skipped the planned Gemini 3.5 Pro and jumped to the Gemini 4 generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (AA-scored): **57.1%** (Carbon 65.2%, Astra 59.1%, Opus 5.5 59.6%, Fable 5.1 52.0%)
- Agents' Last Exam v1.1: **69.0%** (Carbon 77.4%, Astra 73.1%, Opus 5.5 71.6%)
- AutomationBench (Zapier): **51.3%** (Carbon 53.9%, Astra 41.4%, Opus 5.5 42.5%, Fable 5.1 31.4%)
- Vending-Bench 2 bank balance: **$13,718** (Carbon $16,484, Astra $15,515, Opus 5.5 $9,235)
- OSWorld-2.1 (offline subset): **74.7%** (Opus 5.5 leads at 87.2%)
- Box enterprise evaluation: **14% accuracy improvement** over Gemini 3.1 Pro, connecting evidence across full document sets including figures (vendor-cited case study)
- Claimed ability to autonomously find, verify and fix critical software vulnerabilities in 20+ languages (vendor claim; no reproducible score)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **50** (Carbon 59, Opus 5.5 58, Astra 57, Fable 5.1 49)
- Vals Index v2.2: **69.2%** (Carbon 70.4%, Opus 5.5 70.2%, Astra 65.0%)
- RiemannBench: **76.0%** — best in table (Carbon 72.0%, Astra 72.0%, Opus 5.5 69.6%, Fable 5.1 65.6%)
- Terminal-Bench-Science 0.1 (AA): **52.9%** (Carbon 64.8%, Astra 63.3%, Opus 5.5 59.0%)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- FrontierSWE 2: **55.0%** (Astra 65.5%, Opus 5.5 62.3%, Carbon 61.2%, Fable 5.1 56.3%)
- SWE-sweep: no verified public score found (dash in Google's table)
- CWE-bench **68.0%**; ExploitGym **42.0%**; SEC-bench Pro **83.4%**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- GraphWalks 256k to 1M, BFS (F1): **84.2%** (Carbon 96.2%, Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%)
- Chartography **71.6%**; Blueprint-Bench 2 similarity **54.4%**
- Security baseline cited in Google's Carbon comparison: indirect prompt-injection single-attempt breach rate **3.1%** (Carbon 0.8%), automated cyber-attack query success **9.86%** (Carbon 2.17%)
- Independent MRCR / RULER figures: no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** Solid top-half agent numbers (Zapier AutomationBench 51.3%, Agents' Last Exam 69.0%, Vending-Bench 2 $13,718) and a 14% enterprise-accuracy gain over Gemini 3.1 Pro; capped by a clearly weaker Terminal-Bench 4.0 (57.1%) and OSWorld-2.1 (74.7%) than the frontier leaders.
- **Reasoning: 93/100.** Best-in-table RiemannBench 76.0% and a competitive Vals Index 69.2%, with multi-step deep-reasoning positioning; capped by the lowest AA Index v5.0 of the flagship group (50) and weaker Terminal-Bench-Science 52.9%.
- **Context window: 95/100.** Up-to-1M-token window with up-to-1M output and a strong GraphWalks 84.2%; capped by trailing Carbon's 96.2% and by the unverified exact input/output split.
- **Multimodal: 93/100.** Full text/image/video/audio/document input with competitive Chartography 71.6% and Blueprint-Bench 2 54.4%; capped by text-only output and by leading no multimodal row in the official table.
- **Coding: 91/100.** FrontierSWE 2 55.0% and credible CWE-bench/SEC-bench Pro cyber-coding results; capped by no published SWE-sweep figure and by trailing all three frontier peers on FrontierSWE 2.
- **Cost efficiency: 78/100.** A reported $2 / 1M input price undercuts the $4-class frontier flagships; capped because the output price and any free tier could not be verified this pass.
- **Overall Score: 93/100.** Half-up mean of 93, 93, 95, 93, 91 = 93.0 → 93. Best fit: cost-sensitive everyday enterprise knowledge work and multi-step analysis; Google itself recommends Argon over Carbon for routine tasks.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: Google DeepMind's official Gemini 4 performance table (the Argon column with four comparators), the Baidu Baike Gemini 4 Argon article, and a news aggregation of Google's global API rollout pricing. Vendor-cited case studies and vendor claims are labelled as such; figures measured under a third-party harness carry the harness name. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini — Google DeepMind (official Gemini 4 Carbon/Argon benchmark table)](https://deepmind.google/models/gemini/nano/)
  - [Gemini 4 Argon — 百度百科 (release, capabilities, pricing coverage)](https://baike.baidu.com/item/Gemini%204%20Argon/69235019)
  - [谷歌 Gemini 4 Argon 全球开放，输入 token 定价每百万 2 美元](http://wap.myestore.cn/grpnews/202611/article_61035655.shtml)
