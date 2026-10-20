## Gemini 2.5 Flash-Lite

- **Name:** Gemini 2.5 Flash-Lite (Non-reasoning)
- **Short description:** Google's lightweight, cost-optimized multimodal model with 1M context window. Supports text, image, speech, video input. Non-reasoning variant (direct responses). Deprecated in favor of Sep '25 Preview.
- **Provider / access:** Google (proprietary) — available via Google AI Studio, Vertex AI, and Google AI API. Single provider.
- **Release / knowledge:** Released June 17, 2025; knowledge cutoff January 2025. Deprecated; newer Preview (Sep '25) recommended.
- **IDs:** `gemini-2.5-flash-lite` (Google AI API), proprietary endpoints.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text, image, speech, video in; text out. Multimodal input (non-reasoning).
- **Pricing:** $0.10/M input, $0.40/M output, 90% cache discount (Google API). Blended ~$0.07/M. Very competitive for non-reasoning tier.

### Raw benchmarks found
- **Artificial Analysis Intelligence Index:** 7 (estimated, non-reasoning class) — #51/71.
- **AA-Omniscience Index:** Not directly scored for Flash-Lite (base Flash: -42.6%).
- **AA-Omniscience Accuracy:** Not directly scored (base Flash: 26.1%).
- **AA-Omniscience Hallucination Rate:** Not directly scored (base Flash: 93.0%).
- **AA-LCR:** Not directly scored (base Flash: 49.9%).
- **CritPt:** Not directly scored (base Flash: 1.4%).
- **AA-GPQA Diamond:** Not directly scored (base Flash: 68.3%).
- **AA-HLE:** Not directly scored (base Flash: 4.7%).
- **AA-IFBench:** Not directly scored (base Flash: 39.0%).
- **AA-MMMU-Pro:** Not directly scored (base Flash: 65.5%).
- **Tau2-Bench:** Not directly scored (base Flash: 14.9%).
- **BenchLM (Gemini 2.5 Flash base):** 42.11/100 (#132 of 959, partial 12/666).
- **Terminal-Bench / DeepSWE / SWE-Bench / SWE-Atlas / LiveCodeBench / GPQA / HLE / MMLU-Pro / FrontierMath:** Not reported for Flash-Lite specifically.
- **Claw-Eval:** Not reported.
- **Output speed:** 310.5 tok/s (Google API, #3/59).
- **Latency (TTFT):** 0.30s (Google API, very competitive).
- **End-to-end 500 tokens:** ~1.9s.

### Normalized scores (1–100)
- **Tool use: 40/100.** Tau2-Bench 14.9% (base Flash, very low), no Terminal-Bench, MCP Atlas, AutomationBench, GDPval, OSWorld, BrowseComp. Agentic tool use appears weak for non-reasoning lite variant.
- **Reasoning: 50/100.** AA Intelligence Index 7/71 (estimated, below median 9), AA-GPQA Diamond 68.3% (base Flash, frontier 90%+ → ~55), AA-HLE 4.7% (base Flash, very low), AA-LCR 49.9% (base Flash, frontier 95%+ → ~40). Non-reasoning model — no chain-of-thought; reasoning capped.
- **Context window: 100/100.** 1M context window confirmed.
- **Multimodal: 90/100.** Text, image, speech, video in; text out. Full multimodal input (non-reasoning). MMMU-Pro 65.5% (base Flash) confirms vision. Audio/video support per specs.
- **Coding: 45/100.** No LiveCodeBench, SWE-Bench, DeepSWE, SWE-Atlas, Vibe Code, AA Coding Index reported for Flash-Lite. Base Flash not evaluated on coding benchmarks. Non-reasoning + lite = capped coding.
- **Cost efficiency: 95/100.** $0.10/$0.40 with 90% cache discount — extremely competitive for proprietary multimodal 1M context. Blended ~$0.07/M.
- **Overall Score: 65/100.** Mean of (40 + 50 + 100 + 90 + 45) / 5 = 65.