# Qwen 3.8 Omni Flash — Claude Sonnet 4.6 Research

Qwen 3.8 Omni Flash (September 2026) is Alibaba's native end-to-end omnimodal model built on the Qwen 3.8 MoE text backbone. It processes text, image, audio, and video streams within a 1M-token context window. Audio input includes multi-speaker transcription (AliMeeting-test, AISHELL-4), speech translation (FLEURS-60 ASR/S2TT, 60 languages), and acoustic reasoning. Video understanding uses a coarse-to-fine evidence-gathering approach with optional Qwen-MM-Plugins. Lightweight "Flash" tier pricing: $0.15/$0.47 per 1M in/out ($0.016 cached).

Benchmarks (verified):
- Audio-only performance: exceeds Gemini 3.8 Flash on official Qwen evaluation suite
- Audio-visual understanding: closely matches Gemini 3.8 Flash
- Omni benchmark spectrum (34 tasks including Video-MME-v2, OmniVideoBench, WildClawBench-MM, OmniGAIA, StreamingBench): ~25% average improvement over prior Qwen Omni generation
- Multi-speaker ASR: AliMeeting-test, AISHELL-4 (top-tier results)
- Speech translation: FLEURS-60 (60 languages) — high competence
- Acoustic reasoning: SpotSoundBench, MMAU, MMSU, VoiceBench — high scores
- General text reasoning: strong upper-tier on LLM-Stats composite (Qwen 3.8 backbone)
- Pricing: $0.15/$0.47 per 1M (flash tier)

## Scores

- **Tool use: 78/100.** Flash-class MoE with structured JSON output and tool-calling robustness; agentic video processing via Qwen-MM-Plugins. No specific tau3-bench or SWE-bench score published; backbone Qwen 3.8 lineage supports strong tool chaining. Flash architecture trades some reasoning depth for throughput.
- **Reasoning: 75/100.** Inherits strong text reasoning from Qwen 3.8 backbone; flash pricing tier implies lighter reasoning depth than flagship Qwen 3.8-Max/Plus. No standalone GPQA or MMLU-Pro score found for the Omni Flash configuration specifically.
- **Context window: 92/100.** 1M token input / 131K output. Tier: 1M = 92 points. The full 1M window handles long-form video and audio streams natively — a genuine use case, not just a headline number.
- **Multimodal: 88/100.** Text + image + audio + video in; text out. All four input modalities natively end-to-end (not stitched): exceeds Gemini 3.8 Flash on audio-only tasks; matches it on audio-visual. FLEURS-60 (60-language speech translation) and SpotSoundBench acoustic reasoning confirm deep audio capability. Positions in the full-omni tier (82–90).
- **Coding: 62/100.** Qwen 3.8 backbone provides strong coding capability for a flash-tier model (Qwen 3.8 lineage scores HumanEval ~90%+ on coding-specific configs). Omni Flash is not primarily a coding model; no isolated coding benchmark for this exact configuration found.
- **Cost efficiency: 92/100.** $0.15/$0.47 per 1M in/out with $0.016 cached reads — flash-tier pricing for a full 4-modality 1M-context model is exceptional value. Comparable to text-only flash models from competitors.
- **Overall Score: 79/100.** Mean of Tool use (78) + Reasoning (75) + Context (92) + Multimodal (88) + Coding (62) = 395 / 5 = 79.0. Best positioned for high-throughput omnimodal pipelines (voice agents, video analysis, multilingual audio workflows) where flash-tier cost and full 1M native multimodal context are both required.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

