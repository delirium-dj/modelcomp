# Kimi K3 — findings by Grok 4 (xAI/grok-4)

- Source: Moonshot AI (`moonshotai/Kimi-K3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open-weight flagship; also referenced as Kimi K3 Max at max thinking effort)
- **Short description:** Moonshot AI’s flagship 2.8T-parameter native multimodal Mixture-of-Experts model with 104B active parameters, designed for long-horizon coding, agentic knowledge work, and frontier reasoning. World’s first open 3T-class model; open weights released under Kimi K3 License.
- **Provider / access:** Official Kimi API (`kimi-k3` at platform.kimi.ai / api.moonshot.ai, OpenAI-compatible Chat Completions); also Kimi.ai, Kimi Work, Kimi Code; third-party hosts including Amazon Bedrock (`global.moonshotai.kimi-k3` / `us.` profiles), Together AI, OpenRouter, Hugging Face self-host. No Free ID on OpenCode Zen confirmed.
- **Release / knowledge:** Released 2026-07-16 (API/chat); open weights 2026-07-27 on Hugging Face; technical report arXiv:2607.24653 (v2 2026-08-07). Knowledge cutoff not publicly detailed.
- **IDs:** `moonshotai/Kimi-K3` (HF); API `kimi-k3`; Bedrock `global.moonshotai.kimi-k3`. No Free-tier Zen ID exists.
- **Context window:** 1,048,576 tokens total (verified official model card, HF, API docs, Artificial Analysis); default max output 131,072 (configurable up to full window).
- **Modalities:** Text + image + video in; text out; native vision (MoonViT-V2); always-on reasoning/thinking (max effort default at launch; low/high later); tool calls; structured/JSON mode supported.
- **Pricing (as of 2026-10-01):** Official $3.00 / $15.00 per 1M input/output tokens; cached input $0.30; paid (no free API tier for K3). Free-tier chat available via Kimi app with limits; privacy caveat for free chat usage.
- **Architecture:** Sparse MoE, 2.8T total / 104B active parameters, 896 experts (16 activated + 2 shared per token), 93 layers (69 KDA + 24 Gated MLA), Kimi Delta Attention + Attention Residuals, open weights under Kimi K3 License (custom, revenue-gated elements reported).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (vendor/arXiv technical report with Kimi Code harness; independent AA references consistent)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1668–1686 Elo** (Artificial Analysis GDPval-AA v2; ~1668 launch, 1686 in arXiv Fig.1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Additional: AutomationBench-AA **53%** (#1, Artificial Analysis); BrowseComp **91.2%** (vendor)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (vendor/arXiv technical report; AA independent confirms)
- HLE: **43.5%** full (no tools) / **56.0%** with tools (vendor/arXiv)
- LCR / MLCR: **AA-LCR 74.7%** (vendor/arXiv)
- CritPt: **23.4%** (vendor/arXiv)
- Artificial Analysis Intelligence Index / BenchLM overall: **57.1 / #3–4** (v4.1 launch, Artificial Analysis); later rebased v4.3 **44** (AA Aug/Sep 2026 updates)
- Omniscience Accuracy / Hallucination Rate: **46% accuracy / 51% hallucination** (AA-Omniscience Index +18; AA article)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (one secondary report of 76.8% under Kimi Code harness, not independently confirmed as official Verified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58.7%** (vendor/arXiv); secondary AA ~59%
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE 67.5%** (vendor/arXiv with Kimi Code; 67.3 mini-SWE-agent); FrontierSWE **81.2%**; ProgramBench **77.8%**; SWE-Marathon **42.0%** (all vendor/arXiv)

Long context:

- 1M context supported; AA-LCR 74.7%; no specific MRCR / RULER / GraphWalks retrieval % at 512K+ reported in verified public sources.

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.3% (frontier ~88%+), GDPval-AA ~1668–1686 Elo (frontier ~1750+), AutomationBench #1 at 53%; capped slightly below pure top proprietary by GDPval gap to Fable 5.
- **Reasoning: 88/100.** GPQA Diamond 93.5% (frontier 90%+), HLE 43.5%/56% tools (frontier 40%+), AA Index 57.1 launch (#3–4); CritPt 23.4% and HLE gap to Fable 5 cap it below absolute frontier.
- **Context window: 97/100.** Verified 1,048,576 tokens (>=1M tier 95–100); no public >=98% retrieval at 512K+ (MRCR/RULER) so not 100.
- **Multimodal: 82/100.** Native text + image + video in, text out (video/PDF-class 75–90); no native audio in or non-text out.
- **Coding: 90/100.** Terminal-Bench 2.1 88.3% (frontier), DeepSWE 67.5% (near 74% frontier), SciCode 58.7% (frontier 55%+), ProgramBench/FrontierSWE strong; SWE-bench Verified unverified public.
- **Cost efficiency: 60/100.** Official ~$3/$15 per 1M (maps to ~60 tier); strong cache ($0.30) and competitive AA cost-per-task (~$0.94) help but base rate is mid-high.
- **Overall Score: 89.8/100.** Mean of five non-cost dims (92+88+97+82+90)/5 = 89.8; best-fit for long-horizon agentic coding, multimodal knowledge work, and open-weight frontier self-hosting where 1M context + vision matter.

---

## Signature

- Provided by: **Grok 4 (xAI/grok-4)** — 2026-10-01
- Method: Fresh public internet research (official kimi.ai blog, arXiv:2607.24653 technical report, Hugging Face model card, Artificial Analysis articles/pages, vendor pricing docs, secondary aggregators cross-checked for consistency); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
