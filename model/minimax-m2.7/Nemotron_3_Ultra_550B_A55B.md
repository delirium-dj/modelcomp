## MiniMax M2.7

- **Name:** MiniMax-M2.7
- **Short description:** MiniMax's first self-evolving model (229B params), capable of building complex agent harnesses, completing elaborate productivity tasks, and demonstrating strong SRE-level system reasoning. Open-weight with Modified-MIT license.
- **Provider / access:** MiniMax (open-weight, Modified-MIT license) — available on Hugging Face, ModelScope, GitHub, via MiniMax API platform, Groq, NVIDIA NIM, and local deployment (SGLang, vLLM, Transformers, KTransformers).
- **Release / knowledge:** Released May 2026; knowledge cutoff recent 2026.
- **IDs:** `MiniMaxAI/MiniMax-M2.7` (HF), `MiniMaxAI/MiniMax-M2.7` (ModelScope), MiniMax API, Groq, NVIDIA NIM.
- **Context window:** ~196K tokens (per Groq docs); 1M claimed in some contexts but Groq caps at 196K.
- **Modalities:** Text in / text out only.
- **Pricing:** Open-weight (free to self-host); MiniMax API ~$0.279/M in, $1.20/M out (LLMReference); Groq pricing applies.

### Raw benchmarks found
- **SWE-Bench Pro:** 56.22% (internal infra, Claude Code scaffolding, avg over 4 runs).
- **SWE-Bench Multilingual:** 76.5% (internal infra, Claude Code, avg over 4 runs).
- **Multi-SWE-Bench:** 52.7%.
- **Terminal Bench 2:** 57.0% (Claude Code 2.0.64, 8-core/16GB, 7200s timeout, avg over 4 runs).
- **NL2Repo:** 39.8%.
- **VIBE-Pro:** 55.6% (internal benchmark, Claude Code scaffolding, avg over 3 runs).
- **GDPval-AA:** ELO 1495 (highest among open-weight models, surpasses GPT-5.3).
- **Toolathon Verified:** 46.3% (global top tier, official eval service).
- **MM Claw:** 62.7% (end-to-end benchmark, close to Sonnet 4.6).
- **MM Claw Skill Compliance:** 97% across 40+ complex skills.
- **MLE Bench Lite:** 66.6% medal rate (22 ML competitions, 2nd only to Opus-4.6 and GPT-5.4).
- **WildClawBench (InternLM):** Overall 33.8%, Avg Time 551s, Avg Cost $7.2.
- **SkillsBench (BenchFlow):** 34.9% (v1.1).
- **GPQA Diamond:** Not directly listed; M2.5 scores 85.2%.
- **HLE:** Not directly listed.
- **AIME:** Not directly listed; M2.5 scores 86.3%.
- **SciCode:** Not directly listed; M2.5 scores 44.4%.
- **LiveCodeBench:** Not directly listed.
- **Claw-Eval:** WildClawBench 33.8% (partial).
- **Cost per task / speed:** Self-host free; API $0.279/M in, $1.20/M out; Groq serves at high throughput.

### Normalized scores (1–100)
- **Tool use: 75/100.** Terminal-Bench 2 57% (mid), Toolathon 46% (mid), AutomationBench not directly reported, GDPval-AA ELO 1495 (strong), MM Claw 62.7% (strong). Solid agentic tool use but Terminal-Bench below frontier.
- **Reasoning: 72/100.** GDPval-AA ELO 1495 leads open-weight, MLE Bench 66.6% medal rate (strong), VIBE-Pro 55.6% (mid), GPQA/HLE/AIME not directly reported for M2.7 (M2.5: GPQA 85.2%, AIME 86.3%, HLE 19.4%). Reasoning inferred strong from GDPval and MLE Bench.
- **Context window: 65/100.** ~196K context per Groq (native may be higher but not demonstrated at 1M in published benchmarks). 200K = 70 per methodology; 196K ≈ 69.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 78/100.** SWE-Bench Pro 56% (mid), SWE-Bench Multilingual 76.5% (strong), Multi-SWE-Bench 52.7% (mid), Terminal-Bench 2 57% (mid), NL2Repo 39.8% (mid), VIBE-Pro 55.6% (mid, near Opus 4.6). Balanced coding profile; multilingual strength notable.
- **Cost efficiency: 95/100.** Open-weight free to self-host; API pricing very competitive (~$0.28/$1.20).
- **Overall Score: 61/100.** Mean of (75 + 72 + 65 + 15 + 78) / 5 = 61.