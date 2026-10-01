**# Kimi K3 — findings by Grok 4.3 (xai/grok-4.3)**

- Source: Moonshot AI (`moonshotai/Kimi-K3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open weights; max reasoning effort default at launch)
- **Short description:** Moonshot AI’s flagship 2.8T-parameter native multimodal MoE model with 1M context and strong agentic/long-horizon coding & knowledge-work capabilities; first open 3T-class model. Flag variant/alias: none noted.
- **Provider / access:** Moonshot AI / Kimi API (`kimi-k3`), Kimi.ai / Kimi Work / Kimi Code; OpenAI-compatible Chat Completions; open weights on Hugging Face (`moonshotai/Kimi-K3`); also on Together AI, Amazon Bedrock.
- **Release / knowledge:** 2026-07-16 (hosted); open weights 2026-07-27; technical report arXiv:2607.24653.
- **IDs:** `moonshotai/Kimi-K3` (HF); `kimi-k3` (Kimi API); no Free ID on Zen noted.
- **Context window:** 1,048,576 tokens (1M total); verified in official model card, HF repo, and technical report.
- **Modalities:** text/image/video in; text out; reasoning yes (always-on thinking, max effort default); tool calls yes; JSON mode supported (standard for provider).
- **Pricing (as of 2026-10-01):** $3 in / $15 out per 1M tokens (paid; cached input ~$0.30 noted on some hosts); free-tier privacy caveat: none specified for hosted API.
- **Architecture:** 2.8T total / 104B active parameters, sparse MoE (16 of 896 routed experts + 2 shared per token), 93 layers (69 KDA + 24 gated MLA), open-weights under Kimi K3 License (revenue-gated commercial use).

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: **88.3%** (Moonshot vendor report / HF model card / technical report)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **Elo 1668 / ~59%** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **93.5%** (Moonshot vendor report / HF model card / technical report)
- HLE: **43.5%** (no tools; Moonshot vendor report)
- LCR / MLCR: no verified public score found (AA-LCR ~74.7% noted in one vendor table)
- CritPt: **23.4%** (Moonshot vendor report)
- Artificial Analysis Intelligence Index / BenchLM overall: **57.1** (v4.1 launch, 4th overall; later 60 then 44 on v4.3 rebase) / no separate BenchLM rank found (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

**Coding:**

- SWE-bench Verified / SWE-Pro: **93.4%** (BenchmarkList compilation of public reports)
- LiveCodeBench: **87.2%** (BenchmarkList)
- SciCode / AA-SciCode: **58.7%** (Moonshot / BenchmarkList)
- Vibe Code Bench: **85.0%** (BenchmarkList)
- DeepSWE / Coding Index / other: **67.5%** (Moonshot vendor report)

**Long context:**  
no long-context retrieval reported (e.g., no MRCR/RULER/GraphWalks at 1M)

### Normalized scores (1-100)

- **Tool use: 92/100.** Strong Terminal-Bench 2.1 (88.3%, frontier tier) and GDPval-AA Elo ~1668 cap it below absolute top proprietary agentic results.
- **Reasoning: 88/100.** GPQA Diamond 93.5% (frontier) offset by lower HLE (43.5%) and CritPt (23.4%).
- **Context window: 97/100.** 1M tier (95-100); no specific long-context retrieval scores reported to push to 100.
- **Multimodal: 82/100.** Native image + video in (75-90 tier); text-only out.
- **Coding: 91/100.** Multiple high scores (SWE-bench Verified 93.4%, Terminal-Bench 88.3%, LiveCodeBench 87.2%) place it frontier-competitive.
- **Cost efficiency: 60/100.** $3/$15 per MTok places it at the ~$3/$15 example tier.
- **Overall Score: 90/100.** Mean of five non-cost dims (rounded half-up); best-fit for long-horizon coding, agentic knowledge work, and open-weight frontier deployment where 1M context and native vision matter.

---

## Signature

- Provided by: **Grok 4.3 (xAI/grok-4.3)** — 2026-10-01
- Method: public internet research via web_search on official sources (Moonshot blog/HF/arXiv), Artificial Analysis, BenchmarkList, vendor reports, and technical evaluations; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
