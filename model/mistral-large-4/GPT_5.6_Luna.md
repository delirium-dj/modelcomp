# Mistral Large 4 — findings by GPT 5.6 Luna

- Source: Mistral AI / Mistral Large 4 (Le Chonk)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's open-weight hybrid instruct-and-reasoning MoE, released as the improved successor to the October public preview. It is a general-purpose multimodal model with particularly strong coding, defensive-security, finance, and agent use cases.
- **Provider / access:** Mistral API/Studio model ID `mistral-large-4-0`, plus partner platforms and self-hosted weights. Mistral documents Chat Completions, function calling, structured outputs, document Q&A, agents, and built-in tools.
- **Release / knowledge:** Public preview 2026-10-06; improved open-weight release 2026-10-29. Knowledge cutoff was not published.
- **IDs:** API `mistral-large-4-0`; weights `mistralai/Mistral-Large-4-1T-A52B`. These are access IDs for the same current Large 4 release, not separate model variants.
- **Context window:** 1M tokens (Mistral model page; also listed by BenchLM).
- **Modalities:** Text and image input, text output; reasoning effort modes `low`, `medium`, and `high` (high is the documented default); function calling and structured output.
- **Pricing (as of 2026-11-02):** $0.70 input / $0.07 cached input / $2.10 output per 1M tokens on Mistral, with provider-specific rates possible. The October 6 preview and October 29 open-weight release are not silently combined for benchmark scores.
- **Architecture:** 1.05T total parameters, 52B active parameters, sparse MoE, and a 1.6B vision encoder; Mistral Ecosystem Open-Weight license (modified MIT).

### Raw benchmarks found

> The October 29 open-weight release is the current target. The October 6 preview result and independent Artificial Analysis rows are retained as separate evaluation contexts because settings and harnesses differ.

Agent / tool use:

- Finch / FinWorkBench: **73.3%**; BrowseComp **84.5%**; B3 Agent Security **97.1%**; malicious-cyber refusal **96.6%** (Mistral's October 29 release).
- Artificial Analysis AutomationBench: **59.9%**; GDPval-AA normalized **46.1%** and Elo **1434**; AA Terminal-Bench 4.0 **26.8%** (BenchLM's independent/provider rows).
- BenchLM October 29 composite: **51.46/100**, rank **#96/1004**, with 30/724 benchmarks covered. This is explicitly partial coverage and is not treated as a five-dimension score.

Reasoning / knowledge:

- Artificial Analysis LCR **81.3%**, CritPt **10.6%**, MLCR-AA **7.8%**, Intelligence Index **25.3%**, and HLE **35.0%** (BenchLM/Artificial Analysis).
- AA-Omniscience accuracy / hallucination rate / index: **23.9% / 41.3% / -7.5%** (BenchLM). The reliability rows temper the strong browse and agent results.

Coding:

- FrontierCode 2.0: **19.7%**; Mistral's release reports Terminal-Bench 4.0: **41%** and Artificial Analysis Coding Agent Index: **48%** (vendor release setting).
- BenchLM rows: Vibe Code Bench **78.40%**, AA-SciCode **54.2%**, and FrontierCode 2.0 **19.7%**. Its independent AA Terminal-Bench 4.0 row is **26.8%**, not a replacement for Mistral's reported 41%.

Multimodal:

- AA-MMMU-Pro: **76.4%**; Design Arena Website **1256** (BenchLM/provider rows).
- The official model page identifies the 1.6B vision encoder and native multimodal input. No verified audio or video output was found.

Long context:

- Official context window: **1M tokens**. AA-LCR **81.3%** is a useful retrieval/reasoning proxy, but no full-window MRCR or RULER result was located.

### Normalized scores (1–100)

- **Tool use: 83/100.** BrowseComp 84.5%, Finch 73.3%, B3 Agent Security 97.1%, and built-in tool/function support are strong; AA AutomationBench 59.9% and partial coverage cap autonomous reliability.
- **Reasoning: 84/100.** LCR 81.3% and strong browsing/finance results support a high score, but HLE 35.0%, Intelligence Index 25.3%, and negative Omniscience Index show uneven general reasoning.
- **Context window: 95/100.** The 1M limit is directly documented and corroborated by BenchLM; the lack of a full-window retrieval benchmark prevents a perfect score.
- **Multimodal: 85/100.** Native image input, a 1.6B vision encoder, and MMMU-Pro 76.4% establish real visual capability; audio/video support was not verified.
- **Coding: 84/100.** The current release reports Terminal-Bench 4.0 at 41%, FrontierCode 2.0 at 19.7%, and a 48% Coding Agent Index, while independent AA rows are lower and setup-sensitive.
- **Cost efficiency: 88/100.** Open weights, self-hosting, and $0.70/$2.10 API pricing are unusually competitive for a 1T-class multimodal model, though hardware costs remain significant.
- **Overall Score: 86.2/100.** Mean of the five quality dimensions `(83 + 84 + 95 + 85 + 84) / 5 = 86.2`; best fit is an open, sovereign coding/agent stack that can exploit image input and a large context.

## Evidence notes

- The vendor's preview Terminal-Bench result (about 28%) and the improved release result (41%) are distinct. The independent BenchLM/Artificial Analysis row (26.8%) is also retained rather than collapsed into either vendor number.
- BenchLM's 51.46 composite is partial and conservative; the normalized Overall above uses the five quality dimensions and excludes Cost efficiency.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Mistral model documentation and October 29 open-weight announcement, BenchLM's October 29 profile, and Artificial Analysis/partner benchmark rows. Preview, current-weight, vendor, and independent benchmark contexts were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 4 model documentation](https://docs.mistral.ai/models/mistral-large-4)
  - [Mistral Large 4 open-weight release](https://mistral.ai/news/mistral-large-4-oss/)
  - [BenchLM Mistral Large 4 profile](https://benchlm.ai/models/mistral-large-4)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
