# Ox Alpha

## Model Identity
- **Developer:** Anonymous (stealth); fingerprinted to Zhipu AI GLM-5.3 family
- **Model ID:** `opencode/ox-alpha`
- **Family:** GLM-5.3 (unconfirmed; based on tokenizer fingerprinting)
- **Released:** August 20, 2026
- **Architecture:** Frontier reasoning model, 1M context window
- **Context Window:** 1M tokens (131K output)
- **Modalities:** Text, image, video, and PDF in; text out
- **Pricing:** Free OpenCode Zen tier; free preview on OpenRouter (expected to end ~Aug 27, 2026)

## Overview

Ox Alpha is a stealth frontier reasoning model that launched anonymously on OpenRouter, OpenCode, Cline, and Nous Research in August 2026. Built for long-horizon coding agents and production workloads, it offers a 1M-token context window with multimodal input capabilities (text, image, video, and PDF). Independent fingerprinting matched its tokenizer and video-token behavior to Zhipu AI's GLM-5.3 family, though no official attribution has been made.

## Scores

- **Tool use: 74/100**
- **Reasoning: 74/100**
- **Context window: 92/100**
- **Multimodal: 75/100**
- **Coding: 78/100**
- **Overall Score: 79/100**
- **Cost efficiency: 97/100**

## Strengths

- **1M context window (highest category score):** Achieves 91.7/100 on context, the strongest of all five categories. The 1M token window with 131K output capacity supports genuinely long-horizon agentic workflows where context preservation is critical.
- **Strong independent coding benchmark:** An independent 10-task community run achieved 80% pass rate, outperforming Fable 5 (65%) and GPT-5.6 Sol (52%) on the same subset, solving tasks that no reference model could crack.
- **Multimodal input support:** Accepts text, image, video, and PDF as input — a rare combination among coding-focused models, enabling vision-based agentic workflows and document understanding.
- **Free during preview:** Available free on OpenRouter and OpenCode Zen, making it accessible for evaluation and experimentation without cost barriers.
- **Cross-tool generalization:** Demonstrated ability to work across Claude Code, OpenClaw, and Qwen Code tool systems, suggesting robust tool-use adaptation.

## Limitations

- **No official model card or vendor benchmarks:** Released as a stealth preview with no official documentation, verified benchmarks, or public leaderboard presence as of August 2026.
- **Full-benchmark correction (80% → 63%):** An initial 10-task sample headline of 80% was corrected to ~63% on the full 113-task DeepSWE set, placing it mid-pack rather than top-tier on coding benchmarks.
- **Weak agentic coding on LiveBench:** Scores only 52.6 on LiveBench agentic coding, suggesting performance may vary significantly across harnesses and evaluation frameworks.
- **Identity ambiguity:** The unconfirmed attribution to Zhipu AI GLM-5.3 family creates uncertainty about the model's true capabilities, training data, and long-term availability.
- **Limited independent evaluation:** Fewer than 5 sourced benchmark rows on public leaderboards; scores rely heavily on a single community evaluation.
