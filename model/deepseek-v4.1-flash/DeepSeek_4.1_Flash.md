# DeepSeek-V4.1-Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek-flash`; legacy alias `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via DeepSeek's own release notes and third-party
> benchmark comparisons).

## Model card

- **Name:** DeepSeek-V4.1-Flash (the smallest model in DeepSeek's new V4.1 architecture family)
- **Short description:** DeepSeek's follow-up to V4-Flash, released 2026-09-10: an MIT-licensed 552B-backbone multimodal MoE with an asymmetric 8B-active prefill / 16B-active decode split, built for input-heavy agentic workloads rather than raw frontier knowledge. It supersedes V4-Flash and, on several agentic evals, beats the larger V4-Pro at a fraction of the active-parameter cost — which is why DeepSeek is phasing out V4-Pro and routes `deepseek-v4-pro` traffic to V4.1-Flash at Flash prices.
- **Provider / access:** DeepSeek API — `model=deepseek-flash` via OpenAI-compatible, Anthropic-compatible and Responses endpoints; legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still resolve but are served by this model at Flash prices. Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`) with a technical report; also on Fireworks, Novita, DeepInfra, Baseten and Featherless.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff approximately 2026-06 (not explicitly disclosed).
- **IDs:** `deepseek-flash` (current); legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`; Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,000,000 tokens; **max output 384,000 tokens** (verified on DeepSeek's Models & Pricing page). Context was extended from a 64K sparse-attention training length via 34T additional context-extension tokens.
- **Modalities:** text + image in (native vision via a from-scratch DeepSeek-ViT encoder), text out; reasoning yes (thinking mode default, with a controllable 1–100 reasoning-effort dial); tool calls, JSON output, Responses API, Anthropic API, FIM completion (non-thinking only).
- **Pricing (as of 2026-09-18):** peak $0.30 / 1M in (cache miss), $0.006 cache hit, $1.20 / 1M out. **Off-peak (half rate):** $0.15 in, $0.003 cache hit, $0.60 out. Peak hours are 01:00–04:00 and 06:00–10:00 UTC weekdays. Concurrency limit 2,500.
- **Architecture:** MIT-licensed MoE, 552B backbone with 8B active parameters during prefill and 16B during decode; 384 routed + 1 shared expert per layer, 6 routed experts per token. Causal Encoder-Decoder (CED) design where the decoder's global KV cache is projected from the encoder's final hidden states; Compressed Sparse Attention 2 (CSA2) with Full/Reindex/Reuse layer modes; FP4 main-KV caching with a hierarchical sparse indexer; DSpark speculative decoding; Engram conditional memory (196B params). Global KV cache ≈ **890 bytes/token — about ¼ of V4-Flash's**.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card, DeepSeek harness, minimal mode, 1M-token context; V4-Pro 87.9%, V4-Flash 82.7%)
- DeepSWE v1.1: **74.2%** (official mini-swe-agent harness; edges out Claude Opus 5's 74.0%)
- SEC-Bench Pro: **62.8%** (behind GPT-5.6 Sol's 74.3%)
- AutomationBench, CyberGym and Agent's Last Exam: **vendor reports family-leading results; individual values were not reproduced in the sources checked**
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: **no independently verified public score found for this checkpoint**
- Cross-scaffold note: DeepSeek reports high-80s/low-90s Terminal-Bench 2.1 results across Claude Code, Codex, OpenCode, Pi, mini-SWE and its own harness — evidence of harness robustness rather than harness tuning.

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (ranked 8th on the Hugging Face model-card eval table) — V4-Pro scores 92.4%
- HLE (text-only subset): **39.1%** (behind Claude Opus 5's 56.3% and GPT-5.6 Sol's 44.5%)
- PARSE-Bench (document parsing): mean **56.57**, text content **88.09**, text formatting **66.05**, layout **28.61**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **not listed** for this checkpoint at check time
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **74.2%** (above)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** for this checkpoint
- Cost-to-task claim: DeepSeek says multiple parties put V4.1-Flash ahead of V4-Pro on performance, cost, speed and total runtime; the ~4× KV-cache reduction directly cuts cache-hit charges in long agent runs.

Long context:

- no MRCR/RULER/GraphWalks recall value published; the 1M window is vendor-claimed, supported by the 34T-token context-extension training and the KV-cache compression design rather than an independent retrieval benchmark.

### Normalized scores (1–100)

- **Tool use: 90/100.** 90.6% Terminal-Bench 2.1 across six harnesses, 74.2% DeepSWE v1.1 and family-leading AutomationBench/CyberGym results; capped because these are vendor-run or vendor-reported and no independent Tau3/GDPval number exists.
- **Reasoning: 86/100.** GPQA Diamond 90.9% is frontier-adjacent, but HLE 39.1% and PARSE-Bench layout 28.61 show the Flash line trades knowledge depth and document-structure understanding for cost.
- **Context window: 95/100.** 1M tokens with 384K output and an ~890 bytes/token KV cache (~¼ of the predecessor) is the strongest long-agent economics found in this scan; no recall-at-depth benchmark caps it below the maximum.
- **Multimodal: 88/100.** Native image input through a dedicated vision encoder with strong text-parsing sub-scores; text-only output, layout parsing is weak, and the earlier vision checkpoint that carried this capability was experimental.
- **Coding: 90/100.** DeepSWE 74.2% and 90.6% Terminal-Bench 2.1 are excellent; no SWE-bench Verified/Pro number exists, and SEC-Bench Pro 62.8% trails GPT-5.6 Sol.
- **Cost efficiency: 92/100.** Off-peak $0.15/$0.60 per 1M with $0.003 cache hits, MIT open weights and 2,500 concurrency is outstanding value; peak-hour doubling and the absence of a truly free tier stop it at 92.
- **Overall Score: 90/100.** (90 + 86 + 95 + 88 + 90 + 92) / 6 = 90.2 → **90**. Best fit: high-throughput agentic coding and terminal workloads that need long context and cheap cache hits rather than maximum knowledge depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (DeepSeek release notes and Models & Pricing page, Hugging Face model card eval table, Benchgen DeepSeek V4.1 Flash model card, third-party comparison tables); scores are normalized 1–100 interpretations, not official vendor scores. This is the reporting agent's own family model, so vendor-reported figures are flagged throughout.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.