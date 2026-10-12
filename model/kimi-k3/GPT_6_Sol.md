# Kimi K3 — findings by GPT 6 Sol

- Source: Moonshot AI (`kimi-k3`; weights `moonshotai/Kimi-K3`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight, native image/video-understanding MoE for long-context research, tool-driven knowledge work and coding. The `max` reasoning setting and Kimi Code harness are configurations, not separate model identities ([official model card](https://huggingface.co/moonshotai/Kimi-K3)).
- **Provider / access:** Moonshot's OpenAI-compatible Chat Completions `https://api.moonshot.ai/v1` with `kimi-k3` ([official quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)); [OpenCode Zen `opencode/kimi-k3`](https://pi.dev/models/opencode/kimi-k3) on OpenAI Chat Completions via `https://opencode.ai/zen/v1`; weights at [Hugging Face](https://huggingface.co/moonshotai/Kimi-K3). Official docs also describe an Anthropic-compatible API.
- **Release / knowledge:** July 16, 2026 ([Vals dated model evaluation](https://www.vals.ai/models/kimi_kimi-k3)); knowledge cutoff not disclosed by [Moonshot's card](https://huggingface.co/moonshotai/Kimi-K3).
- **IDs:** Moonshot `kimi-k3`, Zen `opencode/kimi-k3`, weights `moonshotai/Kimi-K3`. No separately verified Zen Free route; [Zen listing](https://pi.dev/models/opencode/kimi-k3) is paid.
- **Context window:** Native and Zen 1,048,576 combined tokens. [Moonshot API configuration](https://pi.dev/models/moonshotai/kimi-k3) and [official quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart) permit up to 1,048,576 output *as a configurable upper bound*, with 131,072 default; Zen explicitly caps output at 131,072 ([Pi Zen](https://pi.dev/models/opencode/kimi-k3)). A 1M output ceiling is not an additional 1M beyond combined context.
- **Modalities:** Text and image input natively, with video via uploaded-file `video_url` per [Moonshot official quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart); text output. PDFs can be converted to images or processed through document tools, not established as a native PDF token type on Zen. Reasoning always on; tools/JSON Schema supported. On multi-turn requests preserve returned `reasoning_content` and tool-call history ([Moonshot docs](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)). No native audio input/output confirmed.
- **Pricing (as of 2026-10-12):** Moonshot/Zen $3 input cache-miss / $15 output / $0.30 cached-input per 1M ([Moonshot launch pricing](https://www.kimi.com/blog/kimi-k3), [Zen listing](https://pi.dev/models/opencode/kimi-k3)); first-party API needs an account top-up per [quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart). Self-hosted weights carry their own deployment costs.
- **Architecture:** Open **2.8T total / 104B active** MoE, 16 of 896 routed experts with Kimi Delta Attention and Attention Residuals; 1M context; released under the *Kimi K3 License*, not MIT ([Moonshot card](https://huggingface.co/moonshotai/Kimi-K3), [license](https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE)).

### Raw benchmarks found

Cross-checked [Moonshot's detailed official model card](https://huggingface.co/moonshotai/Kimi-K3) and [launch article](https://www.kimi.com/blog/kimi-k3) against independent [Vals](https://www.vals.ai/models/kimi_kimi-k3), [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3), [ARC Prize](https://arcprize.org/results/moonshot-kimi-k3) and [Proximal](https://www.frontierswe.com/). [BenchLM](https://benchlm.ai/models/kimi-k3) is a link-index with source labels, not an extra evaluator. Preserve differences between launch-period benchmarks and later/harder versions.

Agent / tool use:

- [Moonshot TB2.1 **88.3%** with Kimi Code](https://huggingface.co/moonshotai/Kimi-K3), versus [Vals independent TB2.1 **80.90%**](https://www.vals.ai/models/kimi_kimi-k3), [AA TB2.1 **85%**](https://benchlm.ai/models/kimi-k3). The harder TB4.0 is only [**17.17%** on Vals](https://www.vals.ai/models/kimi_kimi-k3) and [**12.6%** on AA](https://benchlm.ai/models/kimi-k3); these are not equivalent test releases.
- [Moonshot Toolathlon-Verified **76.5%**, MCP-Atlas **84.2%**, AutomationBench **30.8%**, BrowseComp **91.2%** with 300K-triggered compaction versus **90.4%** without, on native 1M](https://huggingface.co/moonshotai/Kimi-K3); [AA Tau3 Banking **46.0%**, GDPval-AA **1533 Elo**](https://benchlm.ai/models/kimi-k3). The vendor card lists a historical AA GDPval **1686 Elo**; leaderboard revisions/time explain the mismatch, so both are dated/harness-qualified.
- [Vals Index **50.30% ±0.99**](https://www.vals.ai/models/kimi_kimi-k3) (#30/47 displayed), CyberBench v1.1 **75.24%**, Legal Research **46.15%**, Time Horizon Index **10.50%**. No verified exact K3 Claw-Eval score found.

Reasoning / knowledge:

- [Moonshot GPQA Diamond **93.5%**, HLE Full **43.5% without tools / 56.0% with tools**](https://huggingface.co/moonshotai/Kimi-K3); independent [Vals GPQA **92.93%**](https://www.vals.ai/models/kimi_kimi-k3) and [AA HLE **46.9%**, CritPt **23.4%**, Index v4.3.2 **44**](https://benchlm.ai/models/kimi-k3).
- [ARC Prize verified ARC-AGI-2 **60.4% at max** versus **12.4% at low**](https://arcprize.org/results/moonshot-kimi-k3); cognitive gains depend markedly on reasoning effort. [Vals ProofBench v1.1 **87.00%**](https://www.vals.ai/models/kimi_kimi-k3).

Coding:

- [Moonshot DeepSWE v1.1 **67.5%** with Kimi Code, versus **67.3%** mini-SWE-agent](https://huggingface.co/moonshotai/Kimi-K3); [Vals SWE-bench **93.40%**](https://www.vals.ai/models/kimi_kimi-k3) in its listed harness, LiveCodeBench **87.19%**, Vibe Code Bench v1.1 **84.97%**.
- **Different FrontierSWE versions:** Moonshot's [**81.2% FrontierSWE**](https://huggingface.co/moonshotai/Kimi-K3) is the older July/harness-specific version; independent [Proximal **25.9% ±11.8 FrontierSWE v2**](https://www.frontierswe.com/) uses 34 longer tasks/20h/trial. Do not claim a direct regression on an unchanged test.
- [Moonshot ProgramBench **77.8%**](https://huggingface.co/moonshotai/Kimi-K3) uses Kimi Code/scoring; [Vals ProgramBench **2.00% fully resolved**](https://www.vals.ai/models/kimi_kimi-k3) and Code Migration **16.10%** challenge a blanket engineering claim. [AA SciCode **59.5%**](https://benchlm.ai/models/kimi-k3).

Long context / multimodal:

- [AA-LCR **88.7%**](https://benchlm.ai/models/kimi-k3), long-context reasoning rather than 1M needle retrieval. No verified ≥98% MRCR at 512K–1M found. Moonshot's [BrowseComp 91.2% with 300K compaction / 90.4% without](https://huggingface.co/moonshotai/Kimi-K3) is workflow-specific, not a direct MRCR score.
- [Moonshot MMMU-Pro **81.6% unaided / 83.4% with Python**, Video-MME **90.0%** with subtitles, OmniDocBench **91.1%**](https://huggingface.co/moonshotai/Kimi-K3); independent [Vals MMMU Pro **88.15%**](https://www.vals.ai/models/kimi_kimi-k3) and [AA MMMU-Pro **80.5%**](https://benchlm.ai/models/kimi-k3), each separately configured.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 80.9–88.3%, AA Tau3 46% and MCP-Atlas 84.2% show strong tools, but TB4 12.6–17.17% and long-horizon variance cap robust agency.
- **Reasoning: 86/100.** GPQA ~93%, HLE 43.5% without tools and AA-LCR 88.7% support advanced reasoning; ARC-AGI-2 60.4%, CritPt 23.4% and AA Index 44 hold back the frontier ceiling.
- **Context window: 96/100.** Verified 1,048,576 total and generous native output allowance; Zen output is 131K and no full-window ≥98% retrieval benchmark is verified.
- **Multimodal: 82/100.** Native image/video input and video/document tests show broad vision; Zen lists only text/image, no native audio input or non-text output confirmed.
- **Coding: 85/100.** SWE-bench 93.4% and LiveCodeBench 87.19% are excellent, yet independent FrontierSWE v2 25.9%, TB4 ~15% and Vals ProgramBench 2% temper long-horizon confidence.
- **Cost efficiency: 64/100.** $3/$15 per 1M is steep for open weights versus cheaper peers; $0.30 cached input helps agent loops, while self-hosting isn't a free hosted tier.
- **Overall Score: 86/100.** (82 + 86 + 96 + 82 + 85) / 5 = 86.2, half-up 86; useful for long-context visual knowledge work and coding when the harness preserves thinking correctly.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Moonshot launch/model card/API docs, independent Vals, AA, ARC Prize and Proximal comparisons, plus provider checks; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
