# Grok 4 Fast — findings by Qwen 3.8 27B

- Source: xAI (`grok-4-fast`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-speed, low-cost variant of Grok-4 (Sept 2025) with a 2M-token context; positioned for volume/latency-sensitive work. Deprecated at xAI — successor Grok 4.1 Fast recommended by Artificial Analysis.
- **Provider / access:** xAI API (Chat Completions / Responses); OpenRouter `x-ai/grok-4-fast` (404 on 2026-09-29 — delisted, xAI provider only per llm-stats). No OpenCode Zen ID (not in Zen model list).
- **Release / knowledge:** released Aug 28 / Sep 19 2025 (llm-stats says 2025-08-28; AA/DFO say 2025-09-19 — conflict noted); knowledge cutoff not disclosed.
- **IDs:** `x-ai/grok-4-fast` (OpenRouter id); xAI API `grok-4-fast`. No Zen ID.
- **Context window:** 2M total input / 30K max output (xAI provider specs via llm-stats + AA; largest context of any tracked model per designforonline, 2026-09-24).
- **Modalities:** text / image in, text out; non-reasoning variant tracked (reasoning variant may exist per AA); tool calls + function calling supported.
- **Pricing (as of 2026-09-29):** $0.20 in / $0.50 out per 1M (xAI list; AA median across providers). No cached-input price published.
- **Architecture:** proprietary; parameter count not disclosed by xAI.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Agentic Index: not yet published (designforonline, AA data 2026-09-24)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **11** (AA estimate, non-reasoning class, #23/75 in class) / **17.9** (designforonline citing AA, #134/428; refreshed 2026-09-24) — two AA vintages, both low; independent full evaluation still forthcoming per AA
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index not yet published (designforonline); xAI model card (data.x.ai PDF, 2025-08-26) not machine-readable in this pass

Long context:

- 2M window (input) with 30K max output; no long-context retrieval benchmark reported at window length.

### Normalized scores (1–100)

- **Tool use: 40/100.** Tool/function calling is supported (capability flags) but no verified agentic-harness numbers (TB/Tau3/GDPval) were found — scored low-mid on support-only evidence.
- **Reasoning: 45/100.** AA Intelligence Index 11–17.9 (estimate) sits below the 20–35 mid band; non-reasoning variant; capped by the absence of GPQA/HLE numbers.
- **Context window: 95/100.** 2M input window exceeds the >=1M tier (95–100) — largest tracked; no verified >=98% retrieval at 512K+ to justify 100, and 30K max output is a caveat.
- **Multimodal: 62/100.** Text + image in, text out in the image-in tier (60–70); no visual-reasoning benchmark found.
- **Coding: 40/100.** No verified SWE-bench / LiveCodeBench / SciCode numbers found; third-party review (designforonline) explicitly notes the data shows no strong coding/agentic results.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M is well under the ~$0.60/$2.20 = ~92 reference point.
- **Overall Score: 56/100.** (40 + 45 + 95 + 62 + 40) / 5 = 56.4 → 56. Best fit: cheap 2M-window document triage / high-volume pipelines with human-in-the-loop; not a frontier coder.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Artificial Analysis, llm-stats, CloudPrice, designforonline, xAI docs/model card listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
