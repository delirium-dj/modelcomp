# Kimi K3 — findings by Claude Sonnet 4.5

- Source: Moonshot AI/Kimi K3 (`moonshotai/kimi-k3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (paid only; no Free-tier variant exists on OpenCode Zen — Zen lists only the paid `kimi-k3` ID)
- **Short description:** Kimi K3 is an open-weight, native multimodal agentic model and Moonshot's most capable model to date. It is a 2.8T-parameter model built on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes), with native vision capabilities and a 1-million-token context window. Top use case is long-horizon agentic coding and knowledge work. Variant note: K3 launched with only one reasoning mode, called "max" effort. There is no lightweight or non-thinking variant yet, so every response includes a reasoning trace, and that trace is billed as output tokens (Artificial Analysis additionally tracks a "Kimi K3 (low)" effort setting; all scores below are for "max" unless stated).
- **Provider / access:** OpenCode Zen `opencode/kimi-k3` — Model: Kimi K3. Model ID: kimi-k3. Endpoint: https://opencode.ai/zen/v1/chat/completions (Chat Completions API). Also OpenCode Go: for Kimi K3, you would use opencode-go/kimi-k3 in your config. OpenRouter `moonshotai/kimi-k3` with higher uptime with 19 providers; Cloudflare Workers AI (Request formats: Chat Completions); NVIDIA NIM; Together `moonshotai/Kimi-K3`; Moonshot first-party API; HuggingFace weights `moonshotai/Kimi-K3`.
- **Release / knowledge:** Moonshot AI released its Kimi K3 model, on 16 July 2026, with 2.8 trillion parameters. Moonshot AI released the weights for Kimi K3 on July 27 under a custom license. Knowledge cutoff: not disclosed (OpenCode data page lists Knowledge **Unknown**).
- **IDs:** `opencode/kimi-k3` (paid), `opencode-go/kimi-k3`, `openrouter/moonshotai/kimi-k3`, `huggingface/moonshotai/Kimi-K3`. No Free ID exists on Zen.
- **Context window:** 1,048,576 tokens total — verified via OpenRouter (1,048,576 token context window, maximum output of 1,048,576 tokens), Cloudflare (Context Window ↗ | 1,048,576 tokens), and the Zen model config (Context window: 1,048,576; Max tokens: 131,072). Output cap on Zen/OpenCode is 131K.
- **Modalities:** Text + image in (Artificial Analysis: the model supports text and image input, outputs text, and has a 1M tokens context window); video in is vendor/host-claimed (OpenCode data page: Inputs **Text, Image, and Video**; K3 processes text, images, and video within the same model). Text out only. Reasoning: yes (always-on, "max"). Tool calls: yes (it can sustain long engineering sessions, navigate massive repositories, and orchestrate terminal tools). JSON mode: no verified public documentation found.
- **Pricing (as of 2026-10-01):** OpenCode Zen: Kimi K3 | $3.00 | $15.00 | $0.30 | - (input / output / cached read per 1M). Paid $. Same $3 / $15 / $0.30 on Moonshot first-party, Together, Fireworks, Cloudflare. OpenRouter floor endpoint $0.28 per million input tokens, $10 per million output tokens (third-party hosts; quality/privacy vary). No free tier; no free-tier privacy caveat applies.
- **Architecture:** 2.8T-parameter Mixture-of-Experts model built with Kimi Delta Attention, Attention Residuals, and Stable LatentMoE, with 104B activated parameters and a 1M-token context window. The model combines 69 KDA layers with 24 gated multi-head latent-attention layers. Stable LatentMoE: The model contains 896 experts and selects 16 experts per token, with two shared experts. Kimi-K3 uses quantization-aware training from the supervised fine-tuning stage onward with MXFP4 weights and MXFP8 activations. Open weights under a custom "Kimi K3" license: requires any company with annual revenue greater than US$20 million to negotiate a contract with Moonshot AI before providing Kimi K3 to external customers as a service.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot vendor-reported, Kimi Code harness — On Terminal-Bench 2.1, Moonshot reports 88.3, narrowly behind GPT-5.6 Sol at 88.8 and above the 84.6 values it cites for Claude Fable 5 and Opus 4.8. However, Artificial Analysis's Terminal-Bench page describes its results as independent and currently lists 84.6 as the leading published score. No independent AA TB2.1 figure for K3 located.)
- Tau3-Banking / Tau2-Bench: no verified public score found (OpenRouter shows per-endpoint "TAU-Bench" values ~70.6–76.9% but version/harness undocumented; not used)
- GDPval-AA: **1668 Elo** (Artificial Analysis GDPval-AA v2 — Kimi K3 reaches an Elo rating of 1668 on GDPval-AA v2. This is a marked improvement over K2.6's 1190, surpassing GLM-5.2 (1514), GPT-5.5 (1494), and Claude Opus 4.8 (1600). AA also reports GDPval-AA win rate 51.2%.) Additional: Kimi K3 also scores an impressive 53% and takes the #1 position on AutomationBench-AA; AA-Briefcase Elo of 1543, a +727 improvement over Kimi K2.6 and the second highest score recorded, behind only Claude Fable 5 (1574).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (Toolathlon is referenced as a K3 win vs Opus 4.8 in vendor comparisons, but no numeric value located)
  Reasoning / knowledge:
- GPQA Diamond: **93.5%** (Artificial Analysis independent, "max"; matches Moonshot card GPQA-Diamond | 93.5 | 92.6 | 94.1 | 91.0 | 93.5 | 91.2; Vals AI run via BenchLM: 92.9%)
- HLE: **46.9%** (Artificial Analysis, "max"; Moonshot card HLE-Full 43.5 no tools / 56.0 with tools; AA "low" = 25.0%)
- LCR / MLCR: **88.7%** (AA-LCR, Artificial Analysis "max" as mirrored on OpenRouter; AA "low" = 79.3%; one third-party page cites 74.7% — discrepancy noted, AA-mirrored figure used)
- CritPt: **23.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **57 (Index v4.1, launch, #3) → 44 (current AA model page) / BenchLM #15 of 211 at 72.12** — Kimi K3 scores 57 on the Artificial Analysis Intelligence Index. Its intelligence is comparable to Opus 4.8 and GPT-5.5 but remains behind Fable 5 and GPT-5.6 Sol. Current page: Kimi K3 (Max) scores 44 on the Artificial Analysis Intelligence Index, placing it well above average among comparable models (median: 18). (apparent index re-versioning; OpenRouter lists 43.6, Coding Index 76.2, Agentic Index 50.0). BenchLM: Kimi K3 ranks #15 of 211 at 72.12/100 from 52 source-displayable rows (Supported).
- Omniscience Accuracy / Hallucination Rate: **46% / 51%** (Artificial Analysis — AA-Omniscience Index improved to +18, increasing from K2.6's +6. This is driven by improvements in accuracy rate (33% to 46%). However hallucination rate has regressed compared to K2.6, rising from 39% to 51%. OpenRouter mirror shows 47.6% accuracy / 46.8% non-hallucination.)
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found — Claude Opus 5, Claude Fable 5.1, GPT-6 Astra, GLM-5.3, and Kimi K3 have no Verified entry either. Moonshot does not publish one. (A single third-party blog claims 76.8%; contradicts vendor card, not used.)
- LiveCodeBench: **87.2%** (Vals AI run, via BenchLM — LiveCodeBench (Vals)LiveCodeBench, Vals AI run | Score 87.2% | Versus best verified row Best verified: Claude Fable 5.1 · 90.5%)
- SciCode / AA-SciCode: **59.5%** (Artificial Analysis, "max")
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **DeepSWE 67.5 (Kimi Code harness, vendor) / 67.3 (official DeepSWE leaderboard, mini-SWE-agent)** — K3 appears on the official DeepSWE leaderboard at 67.3 under the mini-SWE-agent harness. AA Coding Index 76.2. Vendor card: 67.5 on DeepSWE, 77.8 raw pass rate on ProgramBench, 88.3 on Terminal-Bench 2.1, 81.2 dominance on FrontierSWE, and 42.0 on SWE Marathon. Independent: FrontierSWE v2 leaderboard 25.9%, CursorBench 3.2 60.8% (BenchLM). Arena: Arena ranked K3 first in its Frontend Code evaluation at 1,679 points, ahead of Fable 5, in blind developer testing. Fireworks internal: if you look at SWE, the headline benchmark, K3 gets **92.4%**, Fable **92.6%**. (proprietary eval, not a public leaderboard). Negative: Semgrep security eval precision 0.684 and Kimi K3 averaged roughly 6% F1 on Repo D, the largest enterprise-style repository in our benchmark set.
  Long context:
- AA-LCR 88.7% (Artificial Analysis, "max"). Vendor footnote: When evaluated with a 1M-token context window and no context management, Kimi K3 achieves a score of 90.4. (agentic benchmark footnote, not a retrieval test). No MRCR / RULER / GraphWalks retrieval score at 512K+ reported.

### Normalized scores (1-100)

- **Tool use: 88/100.** TB2.1 88.3% (vendor, meets ~88% frontier marker but not independently reproduced), GDPval-AA 1668 Elo (independent, below the 1750 frontier bar), AutomationBench-AA 53% #1, AA-Briefcase #2. Capped by missing Tau3-Banking score, vendor-only TB2.1, and an independent GDPval ~80 Elo short of frontier.
- **Reasoning: 90/100.** GPQA 93.5% (90%+ frontier), HLE 46.9% (40%+ frontier), CritPt 23.4%, AA Index 57 on v4.1 (#3 at launch) / 44 on current scale. Capped by index landing just under the 60+ frontier bar and a 51% hallucination rate on AA-Omniscience.
- **Context window: 96/100.** Verified 1,048,576-token window across OpenRouter, Cloudflare, and Zen (≥1M tier = 95-100). AA-LCR 88.7% is strong, but no MRCR/RULER ≥98% retrieval at 512K+ is published, so 100 is not awarded. Zen output cap 131K.
- **Multimodal: 76/100.** Text + image input independently confirmed (AA); video input is vendor/host-claimed (OpenCode data page, Moonshot blog) so it lands at the low end of the +video 75-90 tier. Text-only output; no audio.
- **Coding: 88/100.** TB2.1 88.3% (85%+ marker, vendor), SciCode 59.5% (55%+ marker, independent), LiveCodeBench 87.2% (Vals), AA Coding Index 76.2, #1 Frontend Code Arena. Capped by DeepSWE 67.3-67.5 (below 74% frontier), no SWE-bench Verified entry, independent FrontierSWE v2 at 25.9%, and poor large-repo precision in Semgrep's eval.
- **Cost efficiency: 60/100.** Paid at $3.00 in / $15.00 out / $0.30 cached per 1M on OpenCode Zen and first-party; exactly the $3/$15 ≈ 60 anchor. Always-on reasoning and above-median verbosity push real cost-per-task higher (It counted 130 million output tokens across the evaluation, versus a median around 63 million, and calculated a total evaluation cost of $2,690.80.).
- **Overall Score: 87.6/100.** Mean of (88 + 90 + 96 + 76 + 88) / 5 = 87.6. Best fit: long-horizon agentic coding and terminal/knowledge-work agents needing a 1M context and open weights, where $15/M output and slow decoding are acceptable; avoid for cheap high-volume chat or hallucination-sensitive factual QA.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4.5)** — 2026-10-01
- Method: Public internet research (Moonshot/Kimi model card & blog, HuggingFace, Artificial Analysis model page and articles, BenchLM, OpenRouter, OpenCode Zen/Go docs, Cloudflare & NVIDIA model cards, Vals AI via BenchLM, DeepSWE leaderboard via secondary reporting, press coverage); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
