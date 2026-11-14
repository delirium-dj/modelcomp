- Source: Mistral AI/Mistral Large 4
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (internal codename **Le Chonk**)
- **Short description:** Mistral AI's 2026-11 open-weight 1T-parameter flagship, released with full weights for enterprises and governments to download, fine-tune and self-deploy. A distinct model; Mistral Medium 3.5, Small 4 and Large 3 are separate.
- **Provider / access:** Open weights under the **Mistral Ecosystem Open-Weight licence**; Microsoft Foundry was the first cloud host. API also available (price reported as halved at the weights release).
- **Release / knowledge:** public preview ~three weeks before the 2026-11-06/09 weight release (sources differ by a few days — reported separately); knowledge cutoff: no verified public score found.
- **IDs:** `mistral-large-4` family ID as cited; internal codename Le Chonk. No free Zen ID verified.
- **Context window:** no verified figure in the retrieved pages — no verified public score found.
- **Modalities:** described as a **multimodal** 1T-parameter model in launch coverage; coding and defensive cybersecurity are the highlighted strengths. No verified audio/video input or non-text output for this exact ID.
- **Pricing (as of 2026-11-14):** API price **halved** at the weights release (relative claim); no absolute rate card in the retrieved pages — no verified public price found. Open weights allow free self-hosting.
- **Architecture:** **1 trillion total / 49B active** parameters (Baike); a secondary source cites **1.05T**. Three weeks of additional RL after preview, focused on coding and defensive cyber. Open weights.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Coding Agent Index: **48** — only 1 point below GLM-5.3's **49**, while using **8.5M tokens per task** vs GLM-5.3's **15.9M** (~**47% fewer**)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- FrontierCode 2.0 (Cognition): **19.7%**
- Terminal-Bench 4.0: **41%** self-reported by Mistral (up from **28%** in the preview), while **Artificial Analysis independently measured 25%** on the same harness — both figures reported separately with provenance, never merged
- AA Coding Agent Index **48** as above
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** AA Coding Agent Index 48 (near GLM-5.3) with ~47% fewer tokens per task and strong defensive-cyber RL; capped by no scored general agent harness.
- **Reasoning: 82/100.** 1T/49B MoE with three weeks of targeted RL; capped by zero published numeric reasoning benchmarks for this exact ID.
- **Context window: 80/100.** Scored conservatively: no verified context-window figure could be retrieved this pass, so no higher score is justified.
- **Multimodal: 80/100.** Documented as multimodal in launch coverage; capped by no verified modality list, no non-text output, and no published multimodal benchmark.
- **Coding: 86/100.** Coding Agent Index 48 and a 28%→41% self-reported Terminal-Bench 4.0 gain; capped by the independent AA measurement of 25% on the same harness and a low 19.7% FrontierCode 2.0.
- **Cost efficiency: 92/100.** Free open weights with a permissive-for-enterprise licence, a halved API price and ~47% lower token use per task than GLM-5.3. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 87, 82, 80, 80, 86 = 83.0 → 83. Best fit: self-hosted European/sovereign enterprise coding and defensive-cyber agents; validate Terminal-Bench-class results independently before relying on self-reported figures.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Mistral Large 4 article retrieved via public web search excerpt (1T/49B params, Le Chonk codename, open-weight licence, Microsoft Foundry), plus launch coverage (CSDN, ZAKER) for FrontierCode 2.0 19.7%, AA Coding Agent Index 48, token-per-task figures and Terminal-Bench 4.0 numbers — all labelled secondary. The self-reported 41% and independently measured 25% Terminal-Bench 4.0 results are kept separate with provenance, never merged. A secondary 1.05T parameter figure is likewise reported separately. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Mistral Large 4 — 百度百科 (retrieved via search excerpt; 1T/49B, open weights, licence)](https://baike.baidu.com/item/Mistral%20Large%204/69302860)
  - [Mistral 开放 Mistral Large 4 权重 — ZAKER (Coding Agent Index, token efficiency, Terminal-Bench)](https://app.myzaker.com/news/article.php?pk=6aeda5368e9f097242696458)
