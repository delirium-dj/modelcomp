# MiniMax-M2.5 — findings by GPT-5.6 Sol

- Source: MiniMax/MiniMax-M2.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's open-weight reasoning model for coding, web research, tool use, and office automation. Its strongest exact-model evidence is in agentic coding and search.
- **Provider / access:** MiniMax's OpenAI-compatible Chat Completions API and downloadable weights at Hugging Face; OpenRouter also serves `minimax/minimax-m2.5` through its Chat Completions endpoint.
- **Release / knowledge:** Released 2026-02-12 according to Artificial Analysis and OpenRouter's model timestamp; no verified public knowledge cutoff found.
- **IDs:** `MiniMaxAI/MiniMax-M2.5` (weights), `MiniMax-M2.5` (MiniMax API), and `minimax/minimax-m2.5` (OpenRouter).
- **Context window:** MiniMax's checkpoint config declares 196,608 positions; the first-party MiniMax route exposed through OpenRouter advertises 204,800 total tokens and up to 131,072 completion tokens. Provider limits vary, so 204.8K is the measured API ceiling rather than a universal deployment guarantee.
- **Modalities:** Text input and text output with reasoning, tool calls, caching, and structured/JSON response support; no image, audio, or video input.
- **Pricing (as of 2026-10-25):** The first-party MiniMax route is independently listed by OpenRouter and Artificial Analysis at $0.30/M input, $1.20/M output, and $0.03/M cache reads. MiniMax's launch card described a slower 50-token/s tier at half of the then-$0.30/$2.40 Lightning price; the current MiniMax pricing page no longer lists this deprecated model, so current route evidence is used.
- **Architecture:** Open weights under MiniMax's Modified-MIT license; 229–230B-parameter MoE with about 10B active parameters. The official config has 256 local experts with 8 selected per token, 62 layers, and FP8 quantization metadata.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (**search agent, vendor WebExplorer harness with context management**): **76.3%** (MiniMax official model card).
- SWE-bench Verified on Droid (**coding-agent scaffold robustness**): **79.7%** (MiniMax official model card).
- SWE-bench Verified on OpenCode (**coding-agent scaffold robustness**): **76.1%** (MiniMax official model card).
- GDPval-MM (**internal office-tool agent evaluation**): **59.0% average win rate** (MiniMax official model card; internal benchmark, so treated as supporting evidence rather than a standard GDPval-AA result).
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon: no verified public exact-model score found in accessible source text.

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (MiniMax official appendix; independently surfaced in Hugging Face structured evaluation results).
- HLE without tools: **19.4%** (MiniMax official appendix; independently surfaced in Hugging Face structured evaluation results).
- AA-LCR: **69.5%** (MiniMax official appendix; vendor reproduction of the Artificial Analysis public evaluation method).
- Artificial Analysis Intelligence Index: **23 estimated** (independent Artificial Analysis exact-model page; page explicitly labels the result estimated).
- AIME 2025: **86.3%** (MiniMax official appendix).
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public exact-model score found.

Coding:

- SWE-bench Verified: **80.2%** (MiniMax official headline result, Claude Code scaffold, four-run average); Hugging Face also surfaces **75.8%** from the checkpoint's structured eval record, demonstrating harness sensitivity.
- SWE-bench Pro: **55.4%** (Hugging Face structured evaluation result).
- Multi-SWE-bench: **51.3%** (MiniMax official model card).
- SciCode: **44.4%** (MiniMax official appendix).
- LiveCodeBench / DeepSWE / Coding Index: no verified public exact-model score found.

Long context:

- AA-LCR: **69.5%** (MiniMax official appendix); no independent exact-model MRCR or RULER result found.

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 76.3%, two cross-scaffold SWE-agent results near 80%, and a 59% office-agent win rate support strong agentic operation; absent standard Terminal-Bench, Tau3, and GDPval-AA figures cap it below the frontier band.
- **Reasoning: 80/100.** GPQA-D 85.2% and AIME25 86.3% are strong, while HLE 19.4% and the independently estimated Intelligence Index of 23 prevent a higher score.
- **Context window: 70/100.** The first-party route's 204.8K limit fits the methodology's 200K tier, with 196,608 positions in the open checkpoint and no strong long-context retrieval result beyond vendor-reproduced AA-LCR 69.5%.
- **Multimodal: 15/100.** Independent route metadata and Artificial Analysis agree that this is text-in/text-out only.
- **Coding: 86/100.** SWE-bench Verified 80.2%, SWE-bench Pro 55.4%, and robust Droid/OpenCode results are excellent, but SciCode 44.4% and harness variance cap the normalized score.
- **Cost efficiency: 94/100.** $0.30/M input and $1.20/M output with 90% cache-read discount are unusually inexpensive for this capability level, though not free.
- **Overall Score: 67/100.** Half-up mean of Tool 82, Reasoning 80, Context 70, Multimodal 15, and Coding 86 is 66.6; best suited to inexpensive text-only coding and search agents.

### Sources

- MiniMax official Hugging Face model card and benchmark appendix: https://huggingface.co/MiniMaxAI/MiniMax-M2.5
- MiniMax official GitHub model card: https://github.com/MiniMax-AI/MiniMax-M2.5
- Official checkpoint configuration: https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/config.json
- MiniMax pricing documentation (current catalog cross-check): https://platform.minimax.io/docs/guides/pricing-paygo
- Artificial Analysis exact-model page: https://artificialanalysis.ai/models/minimax-m2-5
- OpenRouter exact-model route and provider metadata: https://openrouter.ai/minimax/minimax-m2.5 and https://openrouter.ai/api/v1/models/minimax/minimax-m2.5/endpoints

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: Public internet research using three exact-name searches, official documentation and model cards first, followed by independent specification, pricing, and benchmark cross-checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
