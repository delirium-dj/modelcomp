# Kimi K3 — findings by ChatGPT 5.6 Luna

- Source: Moonshot AI/Kimi K3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Open-weight native multimodal agentic model from Moonshot AI, designed for long-horizon coding, knowledge work, reasoning, and multimodal workflows. Benchmark figures below are for Kimi K3 at **max reasoning effort**; no separate Free variant/alias was verified. ([GitHub][1])
- **Provider / access:** Kimi API `kimi-k3`; OpenCode Zen `kimi-k3`; official API is OpenAI/Anthropic-compatible and the documented invocation uses **Chat Completions**. OpenCode Zen exposes `https://opencode.ai/zen/v1/chat/completions`. Hugging Face: `moonshotai/Kimi-K3`. No Kimi K3 Free ID is listed on the current OpenCode Zen model list. ([GitHub][1])
- **Release / knowledge:** 2026-07-16 release; no verified public knowledge-cutoff date found in the official model card/repository. ([Kimi][2])
- **IDs:** `moonshotai/kimi-k3`; API `kimi-k3`; OpenCode Zen `kimi-k3` — **no Free ID exists on Zen** in the current published list. ([OpenCode][3])
- **Context window:** 1,048,576 tokens total, with 131,072-token maximum output in `models.dev`; the official Kimi materials describe it as a 1-million-token context window. ([GitHub][4])
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes; structured output yes. Official/model registry data verifies native multimodal input, tool calling, reasoning, and structured output. ([GitHub][4])
- **Pricing (as of 2026-10-01):** $3.00/1M input, $15.00/1M output, $0.30/1M cached input; **paid**. OpenCode Zen currently lists Kimi K3 at the same prices; no Kimi K3 free-tier variant is listed. Official Kimi says cache-hit input is $0.30/MTok and reports >90% cache-hit rate in coding workloads. ([Kimi AI][5])
- **Architecture:** 2.8T total parameters / 104B active, Mixture-of-Experts; Stable LatentMoE effectively activates 16 of 896 experts. Built around Kimi Delta Attention (KDA) and Attention Residuals (AttnRes); open weights under the Kimi K3 License. ([Kimi][2])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot AI/Kimi K3 README; **Kimi Code** harness; max reasoning effort) ([GitHub][6])
- Tau3-Banking / Tau2-Bench: **33.4%** (Moonshot AI/Kimi K3 README; max reasoning effort; harness not specified in the table) ([GitHub][6])
- GDPval-AA: **1686 Elo** (Moonshot AI/Kimi K3 README; Artificial Analysis; max reasoning effort; v2) ([GitHub][6])
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5 Toolathlon-Verified; 84.2 MCP-Atlas; no verified public score found for SWE Atlas Codebase QnA** (Moonshot AI/Kimi K3 README; max reasoning effort) ([GitHub][6])
  Reasoning / knowledge:
- GPQA Diamond: **93.5%** (Moonshot AI/Kimi K3 README; max reasoning effort; top-p 0.95) ([GitHub][6])
- HLE: **43.5% without tools / 56.0% with tools** (Moonshot AI/Kimi K3 README; max reasoning effort; tool/no-tool variants) ([GitHub][6])
- LCR / MLCR: **74.7% AA-LCR** (Moonshot AI/Kimi K3 README citing Artificial Analysis, July 23 2026; max reasoning effort) ([GitHub][6])
- CritPt: **23.4%** (Moonshot AI/Kimi K3 README citing Artificial Analysis, July 23 2026; max reasoning effort) ([GitHub][6])
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / rank not stated on current AA page; 72.1 / #15 of 211** (Artificial Analysis Intelligence Index v4.3.2; BenchLM data as of 2026-10-01) ([Artificial Analysis][7])
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found** (current Artificial Analysis page marks these as not publicly available) ([Artificial Analysis][7])
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** ([GitHub][8])
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58.7%** (Moonshot AI/Kimi K3 README; Artificial Analysis source dated July 23 2026; max reasoning effort) ([GitHub][1])
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.5% DeepSWE v1.1** (Moonshot AI/Kimi K3 README; **Kimi Code** harness; max reasoning effort); **81.2 FrontierSWE dominance score** (Moonshot AI/Kimi K3 README; **Kimi Code** harness) ([GitHub][6])
  Long context:
- **no long-context retrieval reported** (Kimi K3 has a verified 1,048,576-token context limit, but no verified MRCR/RULER/GraphWalks retrieval result was found in the permitted public sources) ([GitHub][4])

### Normalized scores (1-100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 88.3%, OSWorld-Verified at 84.8%, MCP-Atlas at 84.2%, and GDPval-AA at 1686 show strong agentic/tool performance; the 33.4% τ³-Banking and 30.8% AutomationBench results cap the score below the top tier. ([GitHub][6])
- **Reasoning: 88/100.** GPQA Diamond 93.5% and HLE 43.5%/56.0% are frontier-range indicators, but the current Artificial Analysis Intelligence Index is 44 and CritPt is 23.4%, preventing a 90+ normalization under the supplied methodology. ([GitHub][6])
- **Context window: 95/100.** Verified total context is 1,048,576 tokens, placing K3 in the supplied ≥1M tier; no verified ≥98% retrieval result at 512K+ was found, so it does not qualify for the 100-point condition. ([GitHub][4])
- **Multimodal: 85/100.** Native text/image/video input with text output qualifies for the supplied video-input tier; there is no verified audio input or non-text output capability. ([GitHub][4])
- **Coding: 89/100.** Terminal-Bench 2.1 is 88.3%, FrontierSWE is 81.2, and SciCode is 58.7%, while DeepSWE is 67.5%; the strong terminal/scientific coding results are offset by DeepSWE remaining below the supplied 74% frontier marker. ([GitHub][6])
- **Cost efficiency: 60/100.** At $3/$15 per 1M input/output tokens, K3 falls directly into the supplied ~$3/$15 cost-efficiency band; cached input is $0.30/1M. ([Kimi AI][5])
- **Overall Score: 88.2/100.** Mean of the five non-cost dimensions: (84 + 88 + 95 + 85 + 89) / 5 = **88.2**; best-fit recommendation: long-horizon coding, terminal-agent workflows, and multimodal research/document/video tasks.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-01
- Method: public internet research using the permitted source set, prioritizing Moonshot AI's official Kimi K3 materials, Artificial Analysis, BenchLM, OpenCode Zen documentation, models.dev, and Hugging Face; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[1]: https://github.com/MoonshotAI/Kimi-K3/blob/main/README.md?ref=runtimewire&utm_source=chatgpt.com "Kimi-K3/README.md at main · MoonshotAI/Kimi-K3 · GitHub"
[2]: https://www.kimi.com/en/blog/kimi-k3 "Kimi K3 Tech Blog: Open Frontier Intelligence"
[3]: https://opencode.ai/v2/docs/console/models/ "Models | OpenCode"
[4]: https://github.com/anomalyco/models.dev/blob/dev/models/moonshotai/kimi-k3.toml "models.dev/models/moonshotai/kimi-k3.toml at dev · anomalyco/models.dev · GitHub"
[5]: https://www.kimi.ai/blog/kimi-k3 "Kimi K3 Tech Blog: Open Frontier Intelligence"
[6]: https://github.com/MoonshotAI/Kimi-K3/blob/main/README.md?ref=runtimewire "Kimi-K3/README.md at main · MoonshotAI/Kimi-K3 · GitHub"
[7]: https://artificialanalysis.ai/models/kimi-k3 "Kimi K3 (max) - Intelligence, Performance & Price Analysis | Artificial Analysis"
[8]: https://github.com/weijing143/kimi-k3-tech-blog/blob/main/VERIFICATION.md?utm_source=chatgpt.com "kimi-k3-tech-blog/VERIFICATION.md at main · weijing143/kimi-k3-tech-blog · GitHub"
