# Gemini 3.1 Pro — findings by GPT-6.1 Sol

- Source: Google DeepMind / `gemini-3.1-pro-preview`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Multimodal reasoning model based on Gemini 3 Pro. This report measures the documented February Preview route, not an assumed newer GA checkpoint or Deep Think service.
- **Provider / access:** Google Gemini API and AI Studio; Vertex AI, Antigravity and Gemini products are listed distribution channels. Native GenerateContent API; not assumed identical to an OpenAI-compatible gateway.
- **Release / knowledge:** February 19, 2026; knowledge cutoff not independently established from the retrieved exact-model documentation.
- **IDs:** `gemini-3.1-pro-preview`, publisher-qualified `google/gemini-3.1-pro-preview`. Google also documents a distinct `gemini-3.1-pro-preview-customtools` endpoint; its preferential custom-tool behavior is not silently attributed to the standard endpoint.
- **Context window:** Official input limit 1,048,576; output limit 65,536. Model card describes up to 1M context and 64K output.
- **Modalities:** Text, image, audio, video and PDF input; text output. Thinking, function calling, structured output, code execution, search grounding, caching and file search supported; no native image/audio generation or Live API.
- **Pricing (as of 2026-11-03):** Vals lists $2 input / $12 output per million tokens. Official model page links a tiered price table; higher-context and cache rates were not directly retrieved, so these are not asserted as universal rates. A Google developer-forum result confirms a 200K pricing threshold. Free API/Zen availability not verified.
- **Architecture:** Proprietary, based on Gemini 3 Pro; parameter counts not disclosed in this source set.

### Raw benchmarks found

Agent / tool use:

- Google high thinking: Terminal-Bench 2.0 **68.5%**, Terminus-2; MCP Atlas **69.2%**; tau2 retail **90.8%**, telecom **99.3%**; BrowseComp with search/Python/browser **85.9%**; APEX-Agents **33.5%**; GDPval-AA **1317 Elo**.
- Vals February 19 run: Terminal-Bench 2.0 **67.4%**, high thinking, official API. Current table lists Terminal-Bench 4.0 **2.52% ±0.51**, SRE Bench **0.00%**, Finance Agent v2 **42.98% ±1.21** and Legal Research Bench **20.67% ±2.81**. Versions and long-horizon task difficulty differ sharply; these are not interchangeable terminal success rates.
- Claw, Toolathon and Tau3: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Google: GPQA Diamond **94.3%**, HLE **44.4% no tools / 51.4% search and code**, ARC Prize verified ARC-AGI-2 **77.1%**.
- Vals current GPQA **95.45% ±1.05**, MMLU Pro **90.99% ±0.28**, ProofBench v1.1 **26.00% ±4.41**, MysteryMechanism **20.72% ±2.73**. High short-answer science performance does not establish equally strong autonomous scientific work.
- LayerLens reports ARC AGI 2 **92.3%**, BFCL v3 **71.2%**, IF-Evals **78.4%** and BIRD-CRITIC **32.5%**, but its article does not establish the ARC split/harness equivalence and incorrectly claims a 2M context window. These are source-reported, lower-confidence supplementary results, not replacements for official limits or ARC's verified result.
- Current AA index, CritPt and hallucination rate: no verified public score found in the directly retrieved sources.

Coding:

- Google: SWE-bench Verified **80.6%**, single attempt; SWE-bench Pro public **54.2%**; LiveCodeBench Pro **2887 Elo**; SciCode **59%**.
- Vals dated February updates: SWE-bench Verified **69.6%**; current table's linked SWE-bench row **78.80% ±1.83**. Preserve the dates rather than silently selecting the highest result.
- Vals current LiveCodeBench **88.48% ±0.93**, Code Migration **17.31% ±3.93**, Vibe Code Bench v1.1 **32.03% ±4.34**, ProgramBench **0.00%**, IOI **51.83% ±2.59**.
- LayerLens reports LiveCodeBench **61.0%**, SWE Bench Lite **48.7%**; its missing split details and editorial inconsistencies limit comparability. Lite is not Verified, and LiveCodeBench percentage is not Pro Elo.

Long context / multimodal:

- Google MRCR v2 eight-needle **84.9%** averaged at 128K, **26.3%** pointwise at 1M. The documented million-token capacity materially exceeds demonstrated retrieval reliability at its edge.
- Google MMMU-Pro **80.5%**; Vals current MMMU Pro **88.21% ±0.78**. Different evaluation configurations/snapshots are retained separately.

### Conflicting evidence and limitations

Independent Vals terminal 2.0 broadly corroborates Google's 68.5%, while later 4.0 and long-running engineering scores reveal a much lower ceiling on harder work. Google's SWE Verified result is above Vals' dated launch run; harnesses, budgets and snapshots are not controlled here, so no causal explanation is claimed. LayerLens' 2M-context assertion conflicts with official 1M documentation and its 92.3 ARC score lacks the verified split information; it cannot justify raising the model's capacity or reasoning score. Preview/customtools/Deep Think identities must remain distinct when reproducing results. Long-context capacity is not long-context competence.

### Normalized scores (1–100)

Evidence-weighted interpretations, not official percentages:

- **Tool use: 83/100.** Strong MCP/tau and corroborated older terminal results, capped by weaker later operational and agentic evaluations.
- **Reasoning: 91/100.** High independently supported science/knowledge results and verified ARC performance; weaker proof/mechanism tasks prevent universal frontier claims.
- **Context window: 87/100.** Million-token capacity is useful, but 26.3% edge-window MRCR materially reduces effective-context confidence.
- **Multimodal: 93/100.** Broad native perception and measured visual reasoning, limited by text-only output and unquantified audio/video quality here.
- **Coding: 85/100.** Strong Verified/Pro and competitive coding, but substantial independent migration and long-horizon failures.
- **Cost efficiency: 82/100.** Competitive listed $2/$12 rates, with unresolved long-context tier totals and repeated-attempt costs limiting certainty.
- **Overall Score: 88/100.** Half-up mean of 83, 91, 87, 93 and 85 is 87.8; best for multimodal reasoning and bounded coding with external verification.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Five successful distinct searches plus direct official card/API documentation, independent Vals and LayerLens comparison. No peer findings read; normalized scores are judgments.
- Search queries: `Gemini 3.1 Pro official model card benchmarks Google`; `site:blog.google "Gemini 3.1 Pro" "77.1"`; `"Gemini 3.1 Pro" Artificial Analysis pricing context benchmark review`; `site:artificialanalysis.ai "Gemini 3.1 Pro" "57" "51%" pricing`; `site:ai.google.dev "gemini-3.1-pro-preview" "$2.00" "$12.00" "200k"`.
- Reference URLs:
  - [Google official model card and evaluation table](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Official API limits and customtools distinction](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Vals independent results and dated updates](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [LayerLens independent report, with caveats above](https://layerlens.ai/blog/gemini-3-1-pro-benchmark-review)
  - [Google developer forum pricing-threshold discussion](https://discuss.ai.google.dev/t/why-price-difference-with-the-same-pro-model/143627)
